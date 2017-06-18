

/**
 * @export function print
 * @param {string} des
 * @param {any} val
 */
export function print (des, val){
    if(!val) {
      console.log(des)
    } else {
      console.log(des, val)
    }
}