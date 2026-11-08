# Understanding TypeScript Access Modifiers: `public`, `private`, `protected`, and `readonly`

## Introduction

TypeScript enhances JavaScript's class syntax with **access modifiers**—keywords that control the visibility and mutability of class members. These modifiers are a compile-time feature that helps enforce encapsulation and prevents unintended external interference with an object's internal state. This post breaks down the four key modifiers: `public`, `private`, `protected`, and `readonly`.

## Body

### `public` (The Default)

If you do not specify a modifier, a class member is **`public`** by default. This means it can be accessed from anywhere—inside the class, from subclasses, and from external code. You rarely need to write `public` explicitly.

```typescript
class Employee {
  public name: string; 
  constructor(name: string) { this.name = name; }
}
const emp = new Employee("Alice");
console.log(emp.name); 
```

### `private` and `protected`

- **`private`**: Members marked `private` can only be accessed within the body of the class that declares them. Subclasses and external code cannot access them.
- **`protected`**: Members marked `protected` can be accessed within the declaring class **and** its subclasses. This is useful for sharing internal logic with derived classes without exposing it to the public API.

```typescript
class Employee {
  protected department: string; 
  private salary: number;      

  constructor(department: string, salary: number) {
    this.department = department;
    this.salary = salary;
  }
  private formatSalary(): string { return `$${this.salary}`; }
}

class Manager extends Employee {
  getDept() { return this.department; } 
 
}
```
It is crucial to note that TypeScript's `private` and `protected` are **compile-time only**. At runtime, the properties remain accessible. For true runtime privacy, JavaScript's `#` private fields should be used.

### `readonly` (Immutability)

The **`readonly`** modifier prevents reassignment of a property after its initialization. A `readonly` property must be assigned either at its declaration or within the class constructor. It is a compile-time guarantee of immutability.

```typescript
class Point {
  readonly x: number;
  readonly y: number = 0; 

  constructor(x: number) {
    this.x = x; 
  }
}
const p = new Point(10);

```

A common and concise pattern is to use **parameter properties**, where modifiers are prefixed directly to constructor parameters, automatically creating the corresponding class field:

```typescript
class Rectangle {
  constructor(
    public readonly width: number,
    protected readonly height: number
  ) {}
}
```

## Conclusion

TypeScript's access modifiers are indispensable tools for designing well-encapsulated object-oriented systems. By thoughtfully applying `public`, `private`, `protected`, and `readonly`, you can clearly define your class's public API, protect internal invariants, and communicate intent to other developers, all while catching potential access violations at compile time.
