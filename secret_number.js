'use strict';
module.exports = function () {
  var randomNumber = Math.random()*1000001;

  function secretNumber () {
      return randomNumber;
  }

    return secretNumber;

};