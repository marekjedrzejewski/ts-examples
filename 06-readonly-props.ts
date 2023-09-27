interface TypeWithReadonlyProp {
  readonly prop: string;
}

function doThings(obj: TypeWithReadonlyProp) {
  // We can read the prop
  console.log(obj.prop);

  // But not re-assign it
  obj.prop = "THAT'S ILLEGAL!";
}

// but it only guards against direct assignment
interface TypeThatHasObjectInside {
  readonly obj: { str: string; num: number };
}

function changePropInside(x: TypeThatHasObjectInside) {
  x.obj.str = "asdf";
  x.obj.num = 3;
}

// you could also change contents when aliasing with compatible (asides readonly) types
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
