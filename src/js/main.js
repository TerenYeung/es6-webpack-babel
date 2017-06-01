/*
 * @Author: terenyeung 
 * @Date: 2017-05-26 23:47:42 
 * @Last Modified by: terenyeung
 * @Last Modified time: 2017-06-01 23:13:54
 */

// import 'style'

import '../css/style'
import '../img/totoro copy.jpg'
import header from 'header'
// import moment from "moment"
// import _ from 'lodash'


function determineDate() {
  import('moment')
    .then(moment => moment().format('LLLL'))
    .then(str => console.log(str))
    .catch(err => console.log('Failed to load moment', err));
}

determineDate();

import('lodash').then(lodash => {
  let _ = lodash
  console.log(_)
})

$('body').html('Hello world')

process.env.NODE_ENV = 'production'
console.log(process.env.NODE_ENV)
console.log(__dirname)
console.log(__filename)
console.log(12312)
console.log(123123211)
global.name = 'teren'
console.log(1231)
console.log(global)
console.log(PRODUCTION)