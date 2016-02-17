'use strict';

const renderers = require('./path_renderers');

function flatten(obj, options) {
  options = options || {};

  const getProperties = options.getProperties || Object.getOwnPropertyNames;
  const render = options.renderer || renderers.simple;


  const retval = {};

  function __flatten(o, fragment) {
    if(Array.isArray(o)) {
      __flattenArray(o, fragment);
    } else if((typeof o) === 'object') {
      __flattenObject(o, fragment);
    } else {
      const key = render(fragment);
      retval[key] = o;
    }
  }

  function __flattenArray(array, parent) {
    for(let i = 0; i < array.length; ++i) {
      const o = array[i];
      const fragment = {
        value: i,
        parent: parent
      };

      __flatten(o, fragment);
    }
  }

  function __flattenObject(obj, parent) {
    const keys = getProperties(obj);
    for(let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      const value = obj[key];
      const fragment = {
        value: key,
        parent: parent
      }

      __flatten(value, fragment);
    }
  }



  __flatten(obj);

  return retval;
}


exports.flatten = flatten;
