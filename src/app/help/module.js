define(function(require) {
  'use strict';

  var angular = require('angular');

  // TODO: remove
  require('angularRoute');

  require('uiRouter');

  // angular module definition
  return angular.module(
    // module name
    'help',

    // module dependencies
    [
      // TODO: remove
      'ngRoute',

      'ui.router'
    ]
  );

});
