#!/usr/bin/node
const firstint = parseInt(process.argv[2]);
const secondint = parseInt(process.argv[3]);
function add (x, y) {
  if (isNaN(x) || isNaN(y)) {
    return NaN;
  }
  return x + y;
}
console.log(add(firstint, secondint));
