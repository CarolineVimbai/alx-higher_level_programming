#!/usr/bin/node
function myfactorial (intOne) {
  if (isNaN(intOne) || intOne === 0) {
    return 1;
  } else {
    return intOne * myfactorial(intOne - 1);
  }
}
console.log(myfactorial(parseInt(process.argv[2])));
