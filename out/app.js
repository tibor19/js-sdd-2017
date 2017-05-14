'use strict';

var _moduledemo = require('./moduledemo');

var _let = require('./let');

var _class = require('./class');

var _ptc = require('./ptc');

var _destructure = require('./destructure');

var _arrow = require('./arrow');

(0, _moduledemo.demo)();
// import {run as runAsync} from './async';

(0, _let.run)();
(0, _class.run)();
(0, _ptc.run)();
(0, _destructure.run)();
// runAsync();
(0, _arrow.run)();

// async function test(){
//     let r = await fetch('/app.js');
//     console.log(r);
//     console.log(r.text());
// }

// test();