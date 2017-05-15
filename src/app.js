import {run as runLet} from './let';
import {run as runDestr} from './destr';
import {run as runParams} from './params';
import {run as runFunc} from './func';
// import './classes';
// import './iterables';

import {Demo} from './demots';

// runLet();
// runDestr();
// This will fail now as c is a const in a different module console.log(c); 
// runParams();

// runFunc();

let d = new Demo('Tibi');
console.log(d.name);