interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

// normally, if you provide aditional props, TS will complain
let mySquare = createSquare({ width: 100, opacity: 0.5 });
// this is desired behaviour, as it can catch misspelling for example
mySquare = createSquare({ colour: "deeppink", widht: 1 });

// you can use `as TypeYouWanted` if that was indeed what you wanted to do
// but it's probably better to add string index signature if you intend to make something extendable
interface SquareConfigWithAdditionalProps {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// there is one thing to be wary of
let squareOptions = { colour: "red", width: 10 };
mySquare = createSquare(squareOptions); // you won't get error here as with literal
// unless variable you provided has nothing in common with the interface
let squareOptionsWithNothingInCommon = { widht: 666 }
mySquare = createSquare(squareOptionsWithNothingInCommon);