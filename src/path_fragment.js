'use strict';
//
// Basically, these functions convert LinkedLists into Arrays
//


function __toArray(fragment, retval) {
  if(fragment) {
    __toArray(fragment.parent, retval);
    retval.push(fragment.value);
  }
  return retval;
}

function toArray(thing) {
  if(Array.isArray(thing)) {
    return thing.slice();
  } else {
    return __toArray(thing, []);
  }
}


exports.__toArray = __toArray;
exports.toArray = toArray;
