
const multiplyValue = (value: number, multiplier: number = 2): number => {
  const result: number = value * multiplier;
  return result;
};


const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};


const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const combined: T[] = [];
  for (const array of arrays) {
    combined.push(...array);
  }
  return combined;
};


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  const popularCourses: Course[] = courses.filter((course: Course): boolean => {
    const isPublished: boolean = course.isPublished;
    const hasEnoughStudents: boolean = course.students >= minStudents;
    return isPublished && hasEnoughStudents;
  });
  return popularCourses;
};


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const values: T[K][] = items.map((item: T): T[K] => {
    const value: T[K] = item[key];
    return value;
  });
  return values;
};


class Employee {
  constructor(
    protected name: string,
    private baseSalary: number
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }
  await new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return "Access Granted";
};