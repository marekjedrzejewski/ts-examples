// JS allows function to have properties
function sing(arg: string) {
  console.log(`♫♬♫ ${arg} ♬♫♬`);
  return Math.round(Math.random() * 100);
}
sing.description =
  "This function sings a song for you and returns random number between 0 and 100";

// if we want to describe its type, we'll need to write a _call signature_
type RandomSingingFunctionWithDescription = {
  description: string;
  (arg: string): number;
};

function functionThatCallsTheOtherOne(
  fn: RandomSingingFunctionWithDescription
) {
  console.log(`Here's the function description: ${fn.description}`);
  console.log(
    `And here's what it returned: ${fn("wheels on a bus go round and round")}`
  );
}

functionThatCallsTheOtherOne(sing);

// if we want to describe constructor we simply add `new` before arguments, like:
type SomeConstructor = {
  new (s: string): Object;
};
