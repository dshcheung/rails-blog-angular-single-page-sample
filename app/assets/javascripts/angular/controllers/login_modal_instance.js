app.controller('LoginModalInstanceCtrl', ['$scope', '$uibModalInstance', 'UserService', function ($scope, $uibModalInstance, UserService) {
  $scope.credentials = {};

  $scope.login = function () {
    UserService.login($scope.credentials, function(){
      $uibModalInstance.close();
    });
  };

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
