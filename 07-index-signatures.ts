interface StringArray {
    [index: number]: string;
}

const abcArray: StringArray = ['a', 'b', 'c'];
// DID YOU KNOW THAT numbers are converted to strings anyway, so you're always indexing with strings in js?
console.log(abcArray['2']);

// when declaring properties with string index signatures, other fields must also match types
// because `obj.property' is same as obj['property']
interface NumberDictionary {
    [index: string]: number;
    length: number;
    name: string;
}
