nerdSourced.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, TopicsFactory, CommentsFactory) {
  $scope.topic = CommentsFactory.findById(TopicsFactory.topics, $stateParams.topicId)
  $scope.addComment = function() {
    $scope.topic.comments.push({ subject: $scope.commentSubject });
    $scope.commentSubect = null;
  }
});
