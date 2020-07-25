/**
 * Get rids of the missing requestAnimationFrame polyfill warning.
 * 
 * @link https://reactjs.org/docs/javascript-environment-requirements.html
 * @copyright 2004-present Facebook. All Rights Reserved.
 */
global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};

const fetchPolifill = require('whatwg-fetch')

global.fetch = fetchPolifill.fetch
global.Request = fetchPolifill.Request
global.Headers = fetchPolifill.Headers
global.Response = fetchPolifill.Response