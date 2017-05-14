import {demo as runModule} from './moduledemo';
import {run as runLet} from './let';
import {run as runClass} from './class';
import {run as runPtc} from './ptc';
import {run as runDes} from './destructure';
import {run as runAsync} from './async';
import {run as runArrow} from './arrow';
import {run as runGen} from './generators';
import runPromises from './promises';

// runModule();
// runLet();
// runClass();
// runPtc();
// runDes();
// runAsync();
// runArrow();

runPromises();

// async function test(){
//     let r = await fetch('/app.js');
//     console.log(r);
//     console.log(r.text());
// }

// test();