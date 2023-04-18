#!/usr/bin/node
exports.callMemoby = function (x, theFunction) {
  for (let y = 0; y < x; y++) {
    theFunction();
  }
};
