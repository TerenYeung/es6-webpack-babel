"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;


/**
 * @export function print
 * @param {string} des
 * @param {any} val
 */
function print(des, val) {
  if (!val) {
    console.log(des);
  } else {
    console.log(des, val);
  }
}