'use strict';

require('./list-tree.css');

var angular = require('angular');

var app = angular.module('angular-sample.list.tree', []);

app.directive('myMenu', ['$compile', function($compile) {
  return {
    restrict: 'E',
    scope: true,
    bindToController: {
      src: '='
    },
    templateUrl: './components/common/list-tree.html',
    controller: function() {        
          var self = this;
          self.onToggle = function() {
            console.log('onToggle');
            self.show = !self.show;
          };
        },
    controllerAs: 'mylistCtrl',
    replace: true,
    compile: function(element, attrs) {
      console.log('compiling');
      var template = '<li ng-repeat="item in mylistCtrl.src.subs">'
                    +'<my-menu src="item"></my-menu>'
                    +'</li>';

      var link;
      return function(scope, element, attrs) {
        link = link || $compile(template);
        link(scope, function(cloned) {
          element.find('ul').append(cloned);
        });
        /*
        scope.onToggle = function() {
          console.log('onToggle');
          scope.show = !scope.show;
        };
        */
      };
    } // compile
  }; // return

}]);

module.exports = app;
