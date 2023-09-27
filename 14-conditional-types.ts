// Types could also be set based on certain conditions
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
interface Cat {
  live(): void;
  meow(): void;
}

type Example1 = Dog extends Animal ? true : false;
type Example2 = Cat extends Animal ? true : false;

// conditional types are a good fit for generics
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");
let b = createLabel(2.8);
let c = createLabel(Math.random() ? "hello" : 42);
