app.controller('SignupModalInstanceCtrl', ['$scope', '$uibModalInstance', 'UserService', function ($scope, $uibModalInstance, UserService) {
  $scope.credentials = {};

  $scope.signup = function () {
    UserService.signup($scope.credentials, function(){
      $uibModalInstance.close();
    });
  };

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
