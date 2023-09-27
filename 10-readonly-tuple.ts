// if you annotate n-elements array `as const` it becomes readonly tuple
const point = [3, 4] as const;
 
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

// this function doesn't mutate the values but is not annotated as `readonly`
distanceFromOrigin(point);