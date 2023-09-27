// void doesn't mean function won't return something. It means it will be ignored

type VoidFunc = () => void;

const f1: VoidFunc = () => true;
const f2: VoidFunc = () => {
  return true;
};
const f3: VoidFunc = function () {
  return true;
};

// variable function is assigned to will be of type void.
const v1 = f1();
const v2 = f2();
const v3 = f3();

// this behaviour is to make things like this legal
const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));
console.log(dst);

// BUT! literal function definition with void return type must not return anything
function f4(): void {
  return true;
}

const f5 = function (): void {
  return true;
};
