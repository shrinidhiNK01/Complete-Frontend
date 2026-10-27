# 09. Object-Oriented Programming, Classes, Prototypes, and Inheritance

## 1. What is OOP?

OOP means Object-Oriented Programming.

It is a way to organize code using objects.

An object can contain:

- Data: properties
- Behavior: methods

Example:

```javascript
const user = {
  name: "Ravi",
  login() {
    console.log(`${this.name} logged in`);
  }
};

user.login();
```

## 2. Why OOP?

OOP is useful when you have many similar things:

- Users
- Products
- Bank accounts
- Game players
- Shapes
- UI components

Instead of repeating code, create a blueprint.

## 3. Constructor Function

Before classes, JavaScript used constructor functions.

```javascript
function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.name} logged in`);
};

const user1 = new User("Ravi", "ravi@example.com");
user1.login();
```

## 4. Classes

A class is a blueprint for objects.

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}

const user1 = new User("Asha", "asha@example.com");
user1.login();
```

## 5. Constructor

The constructor runs when you create a new object.

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const laptop = new Product("Laptop", 60000);
console.log(laptop);
```

## 6. Methods

```javascript
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  getCount() {
    return this.items.length;
  }
}

const cart = new Cart();
cart.addItem({ name: "Mouse" });
console.log(cart.getCount());
```

## 7. Private Fields

Private fields start with `#`.

```javascript
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }

    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
```

This is not allowed:

```javascript
// console.log(account.#balance);
```

## 8. Getters and Setters

```javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const user = new User("Ravi", "Kumar");
console.log(user.fullName);

user.fullName = "Asha Singh";
console.log(user.firstName);
```

## 9. Static Methods

Static methods belong to the class itself, not the object.

```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(2, 3));
```

Example:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  static createGuest() {
    return new User("Guest");
  }
}

const guest = User.createGuest();
```

## 10. Inheritance

Inheritance lets one class reuse another class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog = new Dog("Tommy");
dog.eat();
dog.bark();
```

## 11. `super`

Use `super()` to call parent constructor.

```javascript
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name}: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getDetails() {
    return `${super.getDetails()} - ${this.department}`;
  }
}

const manager = new Manager("Asha", 90000, "Engineering");
console.log(manager.getDetails());
```

## 12. Polymorphism

Polymorphism means different classes can use the same method name with different behavior.

```javascript
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach(shape => {
  console.log(shape.area());
});
```

## 13. Prototypes

JavaScript objects can inherit from other objects through prototypes.

```javascript
const user = {
  name: "Ravi"
};

console.log(Object.getPrototypeOf(user));
```

Classes in JavaScript are built on top of prototypes.

This class:

```javascript
class User {
  greet() {
    console.log("Hi");
  }
}
```

is similar to:

```javascript
function User() {}

User.prototype.greet = function () {
  console.log("Hi");
};
```

## 14. Composition

Composition means building objects by combining smaller abilities.

```javascript
function canEat(object) {
  return {
    eat() {
      console.log(`${object.name} is eating`);
    }
  };
}

function canWalk(object) {
  return {
    walk() {
      console.log(`${object.name} is walking`);
    }
  };
}

function createPerson(name) {
  const person = { name };

  return {
    ...person,
    ...canEat(person),
    ...canWalk(person)
  };
}

const person = createPerson("Ravi");
person.eat();
person.walk();
```

Inheritance asks: "What is this object?"

Composition asks: "What can this object do?"

In real apps, composition is often cleaner than deep inheritance.

## 15. OOP Mini Project: Bank Account

```javascript
class BankAccount {
  #balance;

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.#balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.#validateAmount(amount);
    this.#balance += amount;
    this.transactions.push({ type: "deposit", amount });
  }

  withdraw(amount) {
    this.#validateAmount(amount);

    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#balance -= amount;
    this.transactions.push({ type: "withdraw", amount });
  }

  getBalance() {
    return this.#balance;
  }

  #validateAmount(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Amount must be a positive number");
    }
  }
}

const account = new BankAccount("Ravi", 1000);
account.deposit(500);
account.withdraw(200);

console.log(account.getBalance());
console.log(account.transactions);
```

## 16. When to Use Classes

Use classes when:

- You need many similar objects.
- Objects have data and behavior.
- You are modeling real entities.
- You need clear object lifecycle.

Do not force classes everywhere. Many JavaScript apps use simple functions and objects.

