'use strict';

const renderers = require('./path_renderers');

function flatten(obj, options) {
  options = options || {};

  const retval = {};
  const getProperties = options.getProperties || Object.getOwnPropertyNames;
  const render = options.renderer || renderers.simple;

  function __flatten(o, parent) {
    const keys = getProperties(o);
    for(let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      const value = o[key];

      const fragment = {
        value: key,
        parent: parent
      };

      if((typeof value) === 'object') {
        __flatten(value, fragment);
      } else {
        retval[render(fragment)] = value;
      }

    }
  }

  __flatten(obj);

  return retval;
}


exports.flatten = flatten;
