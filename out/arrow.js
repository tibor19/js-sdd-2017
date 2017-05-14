'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.run = run;
function run() {
    var document = document || null;
    if (document) {
        document.addEventListener('mouseup', function () {
            console.log(this);
        });
    }
}