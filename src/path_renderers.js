
const pathFragment = require('./path_fragment');

function simple(fragment) {
  fragment = pathFragment.toArray(fragment);
  return fragment.join(".");
}

module.exports.simple = simple;
