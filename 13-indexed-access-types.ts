// Just to make this a module to be able to re-use names from different files
export {};

// We can use indexes access type to look up a specific property on another type
type Somebody = { age: number; name: string; alive: boolean };
type Age = Somebody["age"];

type I1 = Somebody["age" | "name"];

type I2 = Somebody[keyof Somebody];

type AliveOrName = "alive" | "name";
type I3 = Somebody[AliveOrName];

// We can even use it to capture element type of array literal
const peopleArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = (typeof peopleArray)[number];
type PersonName = (typeof peopleArray)[number]['name'];

// You can only use types for indexing, not variables
const key = "age"
type AgeAgain = Person[key]