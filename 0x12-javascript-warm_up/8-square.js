#!/usr/bin/node
const size_ofSquare = parseInt(process.argv[2]);
if (isNaN(size_ofSquare)) {
  console.log('Missing size');
} else {
  for (let x = 0; x < size_ofSquare; x++) {
    console.log('X'.repeat(size_ofSquare));
  }
}
