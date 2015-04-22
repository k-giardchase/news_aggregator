nerdSourced.factory('TopicsFactory', function TopicsFactory() {
  var factory = {};
  factory.topics = [];
  factory.addTopic = function() {
    factory.topics.push({ title: factory.topicTitle, description: factory.topicDescription, category: factory.topicCategory, id: factory.topics.length + 1, comments: [] });
    factory.topicTitle = null;
    factory.topicDescription = null;
    factory.topicCategory = null;
  }
  return factory;
});
