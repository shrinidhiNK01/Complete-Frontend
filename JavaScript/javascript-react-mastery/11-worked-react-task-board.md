# 11 — Worked Example: React Task Board, File by File

## Aim

Read and build a small but complete React feature. It demonstrates component boundaries, reducer state, controlled forms, filtering, derived data, accessible labels, and persistence. It deliberately does **not** pretend to be a full production server app; add the API layer after you understand this local version.

## Setup

Create a Vite React project, then replace the generated `src` files with the following structure.

```bash
npm create vite@latest task-board -- --template react
cd task-board
npm install
npm run dev
```

```text
src/
  main.jsx
  App.jsx
  taskReducer.js
  TaskForm.jsx
  TaskList.jsx
  styles.css
```

## `src/main.jsx`: mount React once

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

### Explanation

1. `StrictMode` enables development-only checks, including an extra effect setup/cleanup test. It does not change production UI.
2. `createRoot` connects React to the `<div id="root">` supplied by Vite’s HTML.
3. `App` is the top application component.
4. CSS is imported through the bundler so it is included in the output.
5. React owns everything inside `root`; do not manually replace its child HTML from separate DOM code.

## `src/taskReducer.js`: pure state transitions

```js
export function taskReducer(tasks, action) {
  switch (action.type) {
    case "taskAdded": {
      return [
        ...tasks,
        {
          id: action.id,
          title: action.title,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ];
    }

    case "taskToggled": {
      return tasks.map((task) =>
        task.id === action.id
          ? { ...task, completed: !task.completed }
          : task,
      );
    }

    case "taskDeleted": {
      return tasks.filter((task) => task.id !== action.id);
    }

    case "tasksReplaced": {
      return action.tasks;
    }

    default: {
      throw new Error(`Unknown task action: ${action.type}`);
    }
  }
}

export const initialTasks = [
  { id: "learn", title: "Read the React foundations chapter", completed: true, createdAt: "2026-08-01T09:00:00.000Z" },
  { id: "build", title: "Build the task board lab", completed: false, createdAt: "2026-08-02T09:00:00.000Z" },
];
```

### Explanation

- This module has no JSX, DOM access, or React hooks. That is intentional: it is easy to unit-test.
- A reducer receives the old array and one action, then returns a new array. It never changes `tasks` in place.
- `taskAdded` spreads old tasks into a new array and adds a new object.
- `taskToggled` maps every task. Only the matching task gets a new object; unchanged tasks keep their identity.
- `taskDeleted` filters the unwanted task out.
- `tasksReplaced` is useful when loading a saved list. In a server app, replace this with validated query data or clear mutation logic.
- IDs and timestamps are created before dispatch in a more strictly pure design. This example uses `new Date` in the reducer to stay compact; the next refactor should put `createdAt` in the action.

## `src/TaskForm.jsx`: controlled input and validation

```jsx
import { useId, useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const inputId = useId();
  const trimmedTitle = title.trim();
  const titleError = wasSubmitted && trimmedTitle.length < 3
    ? "Use at least 3 characters."
    : "";

  function handleSubmit(event) {
    event.preventDefault();
    setWasSubmitted(true);

    if (trimmedTitle.length < 3) return;

    onAddTask(trimmedTitle);
    setTitle("");
    setWasSubmitted(false);
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor={inputId}>New task</label>
      <div className="form-row">
        <input
          id={inputId}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-describedby={titleError ? `${inputId}-error` : undefined}
        />
        <button type="submit">Add task</button>
      </div>
      {titleError && <p id={`${inputId}-error`} role="alert">{titleError}</p>}
    </form>
  );
}
```

### Explanation

- `useId` creates a stable React-safe ID for the label/input relationship. It is not an item database ID.
- `title` is state because the input must display and change it. `trimmedTitle` is derived, so it is calculated—not stored.
- `wasSubmitted` prevents an error appearing before the person has tried to submit. A different product may validate while typing; choose deliberately.
- `onSubmit` works for pressing Enter and clicking the button.
- `noValidate` lets this educational example show one custom error. In production, combine native constraints and accessible custom feedback thoughtfully.
- The input’s `value` makes it controlled. `onChange` updates state on every edit.
- `aria-describedby` connects an existing error description only when there is an error.
- `role="alert"` announces the new error. Do not use it for constantly changing non-urgent text.

## `src/TaskList.jsx`: data to UI with stable keys

```jsx
export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks match this filter.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-row">
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <span className={task.completed ? "completed" : ""}>{task.title}</span>
          </label>
          <button type="button" onClick={() => onDeleteTask(task.id)}>
            Delete <span className="sr-only">{task.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
```

### Explanation

- This component is presentational: it receives all data and callbacks as props. It has no local task state.
- The empty result is a valid UI state—not an error.
- `key={task.id}` tells React the stable identity of each sibling. It is never an index because filter/delete operations change indexes.
- The checkbox is controlled by `task.completed`; changing it sends the task ID upward.
- The visible completion style is paired with the checked state, so meaning does not depend on color alone.
- The visually hidden task name makes a repeated “Delete” button more descriptive to screen-reader users.

## `src/App.jsx`: state owner and persistence effect

```jsx
import { useEffect, useMemo, useReducer, useState } from "react";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";
import { initialTasks, taskReducer } from "./taskReducer.js";

const STORAGE_KEY = "task-board-tasks";

function loadInitialTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialTasks;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : initialTasks;
  } catch {
    return initialTasks;
  }
}

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, undefined, loadInitialTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const visibleTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((task) => !task.completed);
    if (filter === "completed") return tasks.filter((task) => task.completed);
    return tasks;
  }, [filter, tasks]);

  const completedCount = tasks.filter((task) => task.completed).length;

  function addTask(title) {
    dispatch({ type: "taskAdded", id: crypto.randomUUID(), title });
  }

  function toggleTask(id) {
    dispatch({ type: "taskToggled", id });
  }

  function deleteTask(id) {
    dispatch({ type: "taskDeleted", id });
  }

  return (
    <main className="app-shell">
      <h1>Task board</h1>
      <p>{completedCount} of {tasks.length} completed</p>

      <TaskForm onAddTask={addTask} />

      <fieldset className="filters">
        <legend>Show tasks</legend>
        {[
          ["all", "All"],
          ["active", "Active"],
          ["completed", "Completed"],
        ].map(([value, label]) => (
          <label key={value}>
            <input
              type="radio"
              name="task-filter"
              value={value}
              checked={filter === value}
              onChange={() => setFilter(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <TaskList
        tasks={visibleTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </main>
  );
}
```

### Explanation

1. `STORAGE_KEY` is one named contract for browser storage.
2. `loadInitialTasks` handles absent/corrupt storage. A production version must validate task shapes too, not merely check array-ness.
3. `useReducer(reducer, undefined, initializer)` calls the initializer only for initial state, avoiding JSON parsing on every render.
4. The effect synchronizes React state with the external `localStorage` system whenever `tasks` changes. The dependency is correct because `tasks` is the value it reads.
5. `visibleTasks` is derived. It does not need state. `useMemo` is optional here—filtering a small list is cheap. It is included to show correct dependencies, not because every derived value needs memoization.
6. `completedCount` is simple derived data and is calculated directly on each render.
7. Event handlers create descriptive reducer actions. They are passed down to children, preserving one-way flow.
8. A `fieldset` and `legend` correctly group related radio controls.
9. One `filter` state value controls all radio buttons; exactly one is selected.
10. `TaskList` receives the filtered list plus intent callbacks. It cannot mutate `tasks` itself.

## `src/styles.css`: small readable baseline

```css
:root {
  font-family: system-ui, sans-serif;
  color: #1f2937;
  background: #f8fafc;
}

* { box-sizing: border-box; }

body { margin: 0; }

button, input { font: inherit; }

.app-shell { max-width: 44rem; margin: 2rem auto; padding: 1rem; }
.task-form, .filters { margin-block: 1.25rem; }
.form-row, .task-row { display: flex; gap: .75rem; align-items: center; }
.form-row input { flex: 1; }
.task-list { display: grid; gap: .5rem; padding: 0; list-style: none; }
.task-row { justify-content: space-between; }
.completed { text-decoration: line-through; }
.empty-state { color: #475569; }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
```

This styling is intentionally minimal. Add responsive layout, visible focus styles, dark theme tokens, and design-system components later. Never remove focus outlines without providing an equally visible replacement.

## Next extensions — make each a new small lesson

1. Move the filter into URL search parameters so the view is shareable.
2. Add a task edit flow with focus management and cancellation.
3. Replace localStorage persistence with an API. Validate task response shapes.
4. Add request loading/error/retry states and server-driven IDs.
5. Write reducer and UI tests first, then add an end-to-end flow.
6. Handle concurrent multi-device updates and optimistic rollback.

The code is deliberately small enough to trace. When you add a feature, keep the data flow readable rather than immediately adding a global store or an extra abstraction.
