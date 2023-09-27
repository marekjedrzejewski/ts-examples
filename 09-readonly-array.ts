// readonly array can be defined with
const a: ReadonlyArray<number> = [1, 2, 3]
// or
const b: readonly number[] = [4, 5, 6]

// readonly can be good way to indicate you won't mutate values in the function
function doStuff(values: readonly string[]) {
    // can read
    const copy = values.slice()
    console.log(values[0])

    // can't mutate
    values.push('lalala')
    values.pop() 
}

// unlike readonly used on other types, you can't assign readonly array to mutable one
let readonlyArray: readonly string[] = []
let mutableArray: string[] = []

readonlyArray = mutableArray;
mutableArray = readonlyArray;

// but you still would be able to modify readonly one with the alias
mutableArray.push('asdf')
console.log(readonlyArray) // prints [ 'asdf' ]
