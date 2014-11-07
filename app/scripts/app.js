'use strict';

/**
 * @ngdoc overview
 * @name twentyfourtyeightApp
 * @description
 * # twentyfourtyeightApp
 *
 * Main module of the application.
 */
angular
.module('twentyfourtyeightApp', ['Game'])
.controller('GameController', function() {
  this.game = GameManager;
});
