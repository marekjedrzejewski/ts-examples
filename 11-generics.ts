// hello world of generics:
function identity<Type>(arg: Type): Type {
  return arg;
}

const result = identity([1, 2, 3]);


// what if we wanted to constraint Type to conform to some interface?
function logLengthAndReturn<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

logLengthAndReturn("boomshakalaka");
logLengthAndReturn([1, 2, 3, 4]);
// number have no length and can't be used here
logLengthAndReturn(1);


// Using type parameters in generic constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4}

getProperty(x, 'a')
getProperty(x, 'x')