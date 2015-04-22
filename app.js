var nerdSourced = angular.module("nerdSourced", ["ui.router"]);

nerdSourced.config(function($stateProvider) {
  $stateProvider.state("home", {
    url: "";
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('topics', {
    url: "/topics",
    templateUrl: "partials/topics.html",
    controller: "TopicsCtrl"
  });
});
