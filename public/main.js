'use strict';

require('bootstrap/dist/css/bootstrap.min.css');

var angular = require('angular');

var app = angular.module('angular-sample', [
  require('angular-ui-bootstrap'),
  require('./components/common/list-tree-directive').name
]);

/**
 * トップレベルのコントローラー
 */
app.controller('RootController', [ function rootController() {
  var self = this;

  self.menu = {
    title: 'ホーム',
    path: 'index.html',
    subs: [
      {
        title: '書籍情報',
        path: 'books.html'
      },
      {
        title: '記事一覧',
        path: 'articles.html',
        subs: [
          {
            title : 'JavaScript関連',
            path: 'js.html',
            subs: [
              { title: 'jQuery', path: 'jq.html'},
              { title: 'AngularJS', path: 'angular.html'}
            ]
          },
          { title: 'Java関連', path: 'java.html'},
          { title: 'データベース関連', path: 'db.html'}
        ]
      }
    ]
  };

}]);
