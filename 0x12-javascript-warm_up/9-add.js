#!/usr/bin/node
const first_int = parseInt(process.argv[2]);
const second_int = parseInt(process.argv[3]);
function add (x, y) {
  if (isNaN(x) || isNaN(y)) {
    return NaN;
  }
  return x + y;
}
console.log(add(first_int, second_int));
