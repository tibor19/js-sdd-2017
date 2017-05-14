'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.run = run;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = function Demo(name) {
    _classCallCheck(this, Demo);

    this.name = name;
};

function run() {
    console.log(new Demo('Tibi').name);
}