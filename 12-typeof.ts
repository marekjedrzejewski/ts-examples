// typeof in ts can be used in type context (as opposed to expression context it's used in by pure js)
let s = "hello";
let n: typeof s;

// there's predefined ReturnType<T>
type FunctionThatReturnsSomething = () => boolean;
type WhateverTheAboveReturned = ReturnType<FunctionThatReturnsSomething>

// ts is guarding us from using typeof on values rathen than types
function f() {
    return 'hello'
}
type T = ReturnType<f>
