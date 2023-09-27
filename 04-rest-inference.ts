// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
const angle = Math.atan2(...args);

// one of those could be used:
// `as const`
// const args = [8, 5] as const;

// as tuple
// const angle = Math.atan2(...args as [number, number]);
