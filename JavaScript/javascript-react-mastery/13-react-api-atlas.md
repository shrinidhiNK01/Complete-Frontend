# 13 — React API Atlas: Every Common Hook and the Problem It Solves

## Aim

Choose an API from the problem, not from a hook checklist. The current official API reference is the source of truth because React evolves; use this atlas to build the mental model, then verify details in the [official React reference](https://react.dev/reference/react).

## 1. Before any hook: components, props, JSX, and keys

React APIs fit inside four rules:

1. Components are called by React through JSX, not as ordinary functions (`<Card />`, not `Card()`).
2. Props, state, and context are inputs for the current render; do not mutate them.
3. Hooks are called at the top level of a component/custom hook in the same order on every render.
4. Render describes UI; side effects belong to an event handler or effect.

Keys are not a hook, but they decide a component instance’s identity in a list. Use stable data IDs. A changing key tells React “this is a new component; reset its state.”

## 2. State hooks

### `useState(initialState)` — one independent piece of UI memory

Use for simple/local state: open/closed, input value, selected ID, a small object/array. Setters schedule a later render; use an updater function when next state depends on previous state.

```jsx
const [count, setCount] = useState(0);
setCount((previous) => previous + 1);
```

Do not store values that are derivable from other props/state. Do not mutate object/array state. An initializer function `useState(() => expensiveInitialValue())` avoids recalculating expensive initial state on every render, and must be pure.

### `useReducer(reducer, initialArg, initializer?)` — related state transitions

Use for complex state, many event sources, or transition logic deserving separate tests. Reducer gets old state/action and returns next state. Keep it pure. Pair with context only when multiple distant consumers need it.

### `useOptimistic(state, updateFn)` — temporary expected state

Use when an action has a predictable immediate UI result but final server confirmation arrives later. `updateFn` must be pure. Design error/rollback, temporary IDs, concurrent actions, and accessibility feedback first. It is most natural with modern action-based/form flows.

### `useActionState(action, initialState, permalink?)` — state from an action

This hook returns `[state, dispatchAction, isPending]`. It coordinates state returned by an action, including an async action. It is especially relevant to modern React forms and server-function workflows. It does not replace server validation/authorization.

## 3. Context hooks

### `createContext(defaultValue)` + `useContext(Context)` — distant shared dependency

Create a context outside components, provide a value above consumers, and read the closest provider’s value below. In modern React, `<ThemeContext value={theme}>` provides it; older code uses `<ThemeContext.Provider value={theme}>`.

Use for theme, locale, current account/session snapshot, routing, or cohesive feature state—not every parent-to-child value. Providers re-render consumers when the value changes by identity, so split unrelated data and keep values stable when it matters.

## 4. Ref hooks and imperative boundaries

### `useRef(initialValue)` — stable mutable container

The ref object persists across renders and changing `.current` does not trigger a render. Use for DOM nodes, timer IDs, a third-party widget, or the latest value read by an external callback. If the screen needs it, use state.

### `forwardRef` and `useImperativeHandle(ref, createHandle, dependencies?)`

Refs can be passed to elements to focus/measure them. In newer React versions, `ref` can be received as a prop by function components; older code uses `forwardRef`. `useImperativeHandle` exposes a narrow imperative API instead of the whole child DOM implementation.

```jsx
function SearchInput({ ref }) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() { inputRef.current?.focus(); },
  }), []);
  return <input ref={inputRef} type="search" />;
}
```

Use only for genuine imperative needs such as focus, scroll, selection, or media controls. A parent should not use a child ref to micromanage its declarative state.

## 5. Effect hooks: synchronization, not calculation

### `useEffect(setup, dependencies?)` — sync after commit

Use for external systems: subscriptions, browser APIs, timers, connections, non-React widgets, and sometimes client data fetching. Return cleanup that undoes setup. Include every reactive value read by setup/cleanup in dependencies. Effects run only on client.

### `useLayoutEffect(setup, dependencies?)` — sync before paint

Use only when you must measure DOM layout then update before the browser paints, such as tooltip positioning. It can delay paint. Start with `useEffect`; use this only to fix a measured visible layout problem.

### `useInsertionEffect(setup, dependencies?)` — CSS library insertion

This runs before React changes DOM. It is an escape hatch for CSS-in-JS library authors injecting styles, not ordinary component work. Do not update state inside it.

### `useEffectEvent(callback)` — latest non-reactive values inside an effect

Modern React provides an effect event to separate code that should read the latest props/state from code that should trigger an effect re-synchronization. It is called from effects, omitted from dependencies, and is not a general event handler. Use it only after you understand ordinary dependency refactoring.

## 6. Performance and scheduling hooks

### `useMemo(calculateValue, dependencies)`

Caches the *result* of a pure calculation while dependencies are the same. Use after profiling a meaningful expensive calculation or when a stable value is needed for an optimized child/effect. Do not rely on it for correctness; React may discard caches in some situations.

### `useCallback(callback, dependencies)`

Caches the *function identity*. This matters only when identity matters—usually a memoized child, a hook dependency, or a subscription. It does not prevent the function body from accessing stale state unless dependencies are correct.

### `memo(Component, arePropsEqual?)`

May skip rendering a component when props are shallowly unchanged. Avoid custom comparison functions unless profiling proves their cost/value. A false comparison can display stale UI.

### `useTransition()` / `startTransition`

Mark a state update non-urgent. React can keep urgent interactions responsive and expose `isPending`. Use for expensive navigation/filtering UI, not for controlling text input state itself or requesting data by default.

### `useDeferredValue(value, initialValue?)`

Lets a slow part of UI render a deferred version of a rapidly changing value. The original value updates immediately. It does not debounce network requests; cancel/debounce those separately when required.

### `useId()`

Creates IDs for accessibility relationships such as label/input and `aria-describedby`. Never use it as a list key or database record ID; generated output depends on tree position and supports server/client matching.

## 7. External stores and custom hook debugging

### `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)`

Use when subscribing to a store outside React (a browser API, state library, or legacy observable). It tells React how to get a consistent snapshot during concurrent rendering and SSR. Usually a library author writes this integration; application code consumes that library’s hook.

### `useDebugValue(value, format?)`

Adds a useful label for a custom hook in React DevTools. It is a developer-experience aid, not application state.

## 8. Suspense, `lazy`, `use`, and error handling

### `lazy(load)` + `<Suspense fallback>`

`lazy` defers code downloading until a component is rendered. A nearest Suspense boundary renders fallback while code/data that integrates with Suspense is unavailable. Place boundaries around meaningful content regions so the whole app does not disappear for a small component.

### `use(resource)`

The `use` API can read a Promise or context during render. With a Promise it integrates with Suspense and error boundaries. Unlike other hooks, current React allows `use` conditionally/in loops, but it still must run in a React component or hook and must not be wrapped in `try/catch`. In practice, use it within a framework/data architecture designed for Suspense rather than creating new promises during client render.

### Error boundaries

An error boundary gives fallback UI for errors thrown while rendering descendants. They do not replace `try/catch` for event handlers, async request handlers, or server errors. Existing projects may use a class boundary; frameworks/libraries can provide ergonomic wrappers. Design reset/retry behavior and error reporting.

## 9. React DOM form APIs

React DOM includes form-oriented APIs that pair with modern actions. `useFormStatus` reads pending status from a parent form action. Use it in a child button/component so submission status is presented accessibly. Plain controlled forms and event handlers remain valid for many client applications.

```jsx
function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "Saving…" : "Save"}</button>;
}
```

Keep messages from the server treated as untrusted display data. Pending UI is not authorization; server action/API must validate and authorize.

## 10. Component API patterns

### Composition with `children`

Prefer composing UI with JSX children over a huge set of boolean props:

```jsx
<Card>
  <CardHeader>Profile</CardHeader>
  <CardBody><ProfileForm /></CardBody>
</Card>
```

### Controlled versus uncontrolled component API

A controlled API accepts `value` and `onChange`; the parent owns important state. An uncontrolled API owns internal state and may expose `defaultValue`/ref. Controlled is more flexible for coordination; uncontrolled is simpler to use. Expose one clear model rather than competing sources of truth.

### Render props and compound components

Render props pass a function to customize rendering; compound components coordinate through context (`<Tabs><Tabs.List />…</Tabs>`). They can create flexible libraries, but do not use a pattern merely to look advanced. Start with explicit props and composition.

## 11. React compiler and directives

React Compiler can automatically optimize memoization in supported projects, reducing some manual `useMemo`/`useCallback` needs. Compiler directives such as `"use memo"` are configuration/optimization tools, not an excuse to mutate data or ignore dependencies. Treat compiler adoption as a separately measured build/tooling change, and retain correct pure component logic.

## API chooser table

| Need | First choice | Avoid |
|---|---|---|
| display changing local value | `useState` | ref for visible data |
| organize complex updates | `useReducer` | many tangled setters |
| keep an input node/timer handle | `useRef` | state just to hold handle |
| share theme/current account deeply | context | global context for every state |
| sync listener/connection | `useEffect` | effect for derived data |
| measure before visual paint | `useLayoutEffect` | layout effect by habit |
| skip proven slow calculation | `useMemo` | memoizing all expressions |
| stable callback for optimized child | `useCallback` | callback by default |
| keep typing responsive during slow update | transition/deferred value | transition for input source state |
| code split a feature | `lazy` + Suspense | loading all routes eagerly |
| server/cache data | router/query data layer | many hand-written fetch effects |

## Study prompts

1. For a file uploader, classify each value: selected `File`, progress, preview URL, input DOM node, server response, and retry count.
2. Refactor an effect that derives `filteredProducts` into render-time calculation.
3. Add a focused imperative `focus()` ref API to a composite input without exposing its markup.
4. Profile a slow search list and decide between deferred UI, debounce, virtualization, and memoization.
5. Explain why a context object with `{ user, theme, tasks, modal, setEverything }` is hard to maintain.

Continue with [labs and capstone](./09-labs-and-projects.md) rather than trying every API in one project.
