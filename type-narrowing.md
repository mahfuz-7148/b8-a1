# Mastering Type Narrowing in TypeScript: `typeof`, `instanceof`, and `in`

## Introduction

TypeScript's type system is powerful, but variables often start with broad union types (e.g., `string | number`). **Type narrowing** is the compiler's ability to refine these broad types into more specific ones based on runtime checks within your code. This process, also called **control flow analysis**, ensures you can safely call type-specific methods without casting. This post explores three fundamental narrowing techniques: `typeof`, `instanceof`, and the `in` operator.

## Body

### Narrowing with `typeof` for Primitives

The `typeof` operator is the go-to tool for narrowing primitive types. When you check `typeof value === "string"`, TypeScript understands that within that `if` block, `value` is guaranteed to be a `string`.

```typescript
function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```
This pattern is clean and reliable for `string`, `number`, `boolean`, and other primitives.

### Narrowing with `instanceof` for Classes

When working with class instances, `instanceof` is the appropriate guard. It checks the prototype chain to determine if an object was created from a specific class constructor.

```typescript
class NetworkError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

function handleError(error: Error) {
  if (error instanceof NetworkError) {
    // error is narrowed to NetworkError
    console.error(`HTTP ${error.statusCode}: ${error.message}`);
  } else {
    console.error(error.message);
  }
}
```
`instanceof` is essential for distinguishing between custom error types or different class instances in a union.

### Narrowing with the `in` Operator for Object Shapes

The `in` operator checks for the existence of a property on an object. It is perfect for narrowing union types composed of interfaces or object types that have distinct properties.

```typescript
interface Car { drive: () => void; }
interface Boat { sail: () => void; }

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```
The `in` operator is particularly useful when dealing with API response types that have optional or distinct fields, such as `{ data: unknown } | { error: string }`.

## Conclusion

Type narrowing is a cornerstone of safe TypeScript development. By leveraging `typeof`, `instanceof`, and the `in` operator, you enable the compiler to understand your control flow and provide precise type information. Mastering these guards allows you to write robust, error-resistant code that handles complex union types with confidence.
