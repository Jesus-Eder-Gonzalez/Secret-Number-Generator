'use strict';
module.exports = function () {
    
    const randomNumber = Math.round(Math.random() * 1000001);

    function secretNumber() {
        return randomNumber;
    }

    return secretNumber;
};