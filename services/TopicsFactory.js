nerdSourced.factory('TopicsFactory', function TopicsFactory() {
  var factory = {};
  factory.topics [];
  factory.addTopic = function() {
    factory.topics.push({ title: factory.topicTitle, id: factory.topics.length + 1, comments: [] });
    factory.topicTitle = null;
  }
  return factory;
});
