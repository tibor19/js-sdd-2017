import {run as runLet} from './let';
import {run as runDestr} from './destr';

runLet();
runDestr();
// This will fail now as c is a const in a different module console.log(c); 

