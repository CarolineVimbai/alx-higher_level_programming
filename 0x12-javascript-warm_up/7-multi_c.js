#!/usr/bin/node
const Xtimes = parseInt(process.argv[2]);
if (intconv(Xtimes)) {
  console.log('Missing number of occurrences');
} else {
  for (let x = 0; x < Xtimes; x++) {
    console.log('C is fun');
  }
}
