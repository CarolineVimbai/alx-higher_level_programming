#!/usr/bin/node
exports.call_me_moby = function (x, theFunction) {
  for (let y = 0; y < x; y++) {
    theFunction();
  }
};
