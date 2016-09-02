'use strict';

// Park-Miller PRNG
function random (seed) {
    var state = (seed || 123456789) % 2147483647;
    return function () {
        state = state * 16807 % 2147483647;
        return state;
    }
}

module.exports = random;
