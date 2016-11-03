app.service('PostResource', ['$resource', function($resource){
  this.api = $resource('http://localhost:3000/posts/:id', {
    id: '@id'
  }, {
    'update': {method:'PUT'}
  });
}]);
