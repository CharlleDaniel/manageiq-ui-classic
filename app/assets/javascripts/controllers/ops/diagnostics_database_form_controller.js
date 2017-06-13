ManageIQ.angular.app.controller('diagnosticsDatabaseFormController', ['$http', '$scope', '$attrs', 'miqService', 'miqDBBackupService', function($http, $scope, $attrs, miqService, miqDBBackupService) {
  var init = function() {
    $scope.diagnosticsDatabaseModel = {
      action_typ: 'db_backup',
      backup_schedule_type: '',
      depot_name: '',
      uri: '',
      uri_prefix: '',
      log_protocol: '',
      log_userid: '',
      log_password: '',
    };
    $scope.afterGet = true;
    $scope.modelCopy = angular.copy( $scope.diagnosticsDatabaseModel );
    $scope.dbBackupFormFieldChangedUrl = $attrs.dbBackupFormFieldChangedUrl;
    $scope.submitUrl = $attrs.submitUrl;
    $scope.validateClicked = miqService.validateWithAjax;
    $scope.model = 'diagnosticsDatabaseModel';

    ManageIQ.angular.scope = $scope;
  };

  $scope.backupScheduleTypeChanged = function() {
    if($scope.diagnosticsDatabaseModel.backup_schedule_type == '') {
      $scope.diagnosticsDatabaseModel.depot_name = '';
      $scope.diagnosticsDatabaseModel.uri = '';
      $scope.diagnosticsDatabaseModel.uri_prefix = '';
      $scope.diagnosticsDatabaseModel.log_userid = '';
      $scope.diagnosticsDatabaseModel.log_password = '';
      $scope.diagnosticsDatabaseModel.log_protocol = '';
      return;
    }

    miqService.sparkleOn();

    var url = $scope.dbBackupFormFieldChangedUrl;
    $http.post(url + $scope.diagnosticsDatabaseModel.backup_schedule_type)
      .then(postdiagnosticsDatabaseFormData)
      .catch(miqService.handleFailure);
  };

  $scope.showSubmitButton = function() {
    return true;
  }

  $scope.isBasicInfoValid = function() {
    if($scope.angularForm.depot_name.$valid &&
      $scope.angularForm.uri.$valid &&
      $scope.angularForm.log_userid.$valid &&
      $scope.angularForm.log_password.$valid)
      return true;
    else
      return false;
  };

  $scope.submitButtonClicked = function(confirm_msg) {
    if (confirm(confirm_msg)) {
      miqService.sparkleOn();
      var url = $scope.submitUrl;
      miqService.miqAjaxButton(url, true);
    }
  };

  $scope.canValidateBasicInfo = function () {
    return $scope.isBasicInfoValid();
  }

  $scope.logProtocolChanged = function() {
    $scope.diagnosticsDatabaseModel.backup_schedule_type = '';
    if($scope.logProtocolSelected()) {
      $scope.$broadcast('setNewRecord');
      $scope.$broadcast('reactiveFocus');
      miqDBBackupService.logProtocolChanged($scope.diagnosticsDatabaseModel);
    }
  };

  $scope.logProtocolNotSelected = function() {
    return miqDBBackupService.logProtocolNotSelected($scope.diagnosticsDatabaseModel);
  };

  $scope.logProtocolSelected = function() {
    return miqDBBackupService.logProtocolSelected($scope.diagnosticsDatabaseModel);
  };

  $scope.sambaBackup = function() {
    return miqDBBackupService.sambaBackup($scope.diagnosticsDatabaseModel);
  };

  $scope.sambaRequired = function(value) {
    return miqDBBackupService.sambaRequired($scope.diagnosticsDatabaseModel, value);
  };

  function postdiagnosticsDatabaseFormData(response) {
    var data = response.data;

    $scope.$broadcast('resetClicked');
    $scope.diagnosticsDatabaseModel.depot_name = data.depot_name;
    $scope.diagnosticsDatabaseModel.uri = data.uri;
    $scope.diagnosticsDatabaseModel.uri_prefix = data.uri_prefix;
    $scope.diagnosticsDatabaseModel.log_userid = data.log_userid;

    if ($scope.diagnosticsDatabaseModel.uri_prefix === 'nfs') {
      $scope.diagnosticsDatabaseModel.log_protocol = 'Network File System';
    } else {
      $scope.diagnosticsDatabaseModel.log_protocol = 'Samba';
    }

    $scope.diagnosticsDatabaseModel.action_typ = 'db_backup';

    if ($scope.diagnosticsDatabaseModel.log_userid !== '') {
      $scope.diagnosticsDatabaseModel.log_password = miqService.storedPasswordPlaceholder;
    }

    $scope.$broadcast('setNewRecord', { newRecord: false });
    $scope.$broadcast('setUserId', { userIdName: 'log_userid',
      userIdValue: $scope.diagnosticsDatabaseModel.log_userid });

    miqService.sparkleOff();
  }

  init();
}]);
