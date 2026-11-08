// Problem 1
// const multiplyValue = (value: number, multiplier: number = 2): number => {
//   const result: number = value * multiplier;
//   return result;
// };
// console.log(multiplyValue(4))

// Problem 2
// const processInput = (value: string | number | boolean): string | number => {
//   if (typeof value === "string") {
//     return value.trim().toLowerCase();
//   } else if (typeof value === "number") {
//     return value * 10;
//   } else {
//     return value ? "Active" : "Inactive";
//   }
// };
// console.log(processInput(false))

// Problem 3
// const formatCoordinate = (
//   coordinate: readonly [number, number, string]
// ): string => {
//   const [latitude, longitude, locationName] = coordinate;
//   return `Location: ${locationName} (${latitude}, ${longitude})`;
// };

// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]))

// Problem 4
// const concatenateArrays = <T>(...arrays: T[][]): T[] => {
//   const combined: T[] = [];
//   for (const array of arrays) {
//     combined.push(...array);
//   }
//   return combined;
// };

// console.log(concatenateArrays([1, 2], [3, 4], [5]))

// Problem 5
// interface Course {
//   title: string;
//   students: number;
//   isPublished: boolean;
// }

// const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
//   const popularCourses: Course[] = courses.filter((course: Course): boolean => {
//     const isPublished: boolean = course.isPublished;
//     const hasEnoughStudents: boolean = course.students >= minStudents;

//     return isPublished && hasEnoughStudents;
//   });

//   return popularCourses;
// };

// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];
// console.log(getPopularCourses(courses, 80))


// Problem 6
// const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
//   const values: T[K][] = items.map((item: T): T[K] => {
//     const value: T[K] = item[key];
//     return value;
//   });

//   return values;
// };
// const users = [
//   { id: 1, name: "Rakib", role: "Admin" },
//   { id: 2, name: "Sadia", role: "Editor" },
//   { id: 3, name: "Tariq", role: "Subscriber" }
// ];
// console.log(pluckValues(users, "id"))

// Problem 7
/*class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// Problem 8
async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  return new Promise<string>(
    (resolve: (value: string | PromiseLike<string>) => void): void => {
      setTimeout((): void => {
        resolve("Access Granted");
      }, 1000);
    }
  );
}
*/