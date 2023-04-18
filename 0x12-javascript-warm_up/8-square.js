#!/usr/bin/node
const sizeofSquare = parseInt(process.argv[2]);
if (isNaN(sizeofSquare)) {
  console.log('Missing size');
} else {
  for (let x = 0; x < sizeofSquare; x++) {
    console.log('X'.repeat(sizeofSquare));
  }
}
