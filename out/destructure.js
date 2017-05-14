'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.run = run;
var person = {
    name: 'Tibi',
    age: 44,
    address: {
        city: 'Tenerife'
    }
};

var x = person.name,
    _person$tibi = person.tibi,
    tibi = _person$tibi === undefined ? 'Tibi' : _person$tibi;


function test(_ref) {
    var name = _ref.name,
        tibi = _ref.tibi;

    console.log(name);
    console.log(tibi);
}

function run() {
    test(person);
}