app.controller('PostShowNewEditModalInstanceCtrl', ['$scope', '$uibModalInstance', 'PostResource', 'params', 'UserService', function ($scope, $uibModalInstance, PostResource, params, UserService) {
  $scope.createPost = function () {
    PostResource.api.save($scope.post, function(resp) {
      $uibModalInstance.close(resp);
    });
  };

  $scope.updatePost = function () {
    PostResource.api.update($scope.post, function(resp) {
      $uibModalInstance.close(resp);
    });
  };

  $scope.toEditMode = function () {
    $scope.mode = 'edit';
  };

  $scope.isNew = function () {
    return $scope.mode == 'new';
  };

  $scope.isEdit = function () {
    return $scope.mode == 'edit';
  };

  $scope.isShow = function () {
    return $scope.mode == 'show';
  };

  $scope.isLoggedin = function () {
    return $scope.user.loggedin;
  };

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };

  var init = function () {
    $scope.user     = UserService.user;

    $scope.mode     = params.mode;
    $scope.post     = params.post ? angular.copy(params.post) : {};
  };

  init();
}]);
