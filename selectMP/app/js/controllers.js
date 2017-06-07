'use strict';

/* Controllers */

var findMPControllers = angular.module('findMPControllers', []);

findMPControllers.controller('findMPCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {

  $http.get('/wp-content/themes/twentyfourteen-child/selectMP/app/mps/mps.json').success(function(data) {
    $scope.mps = data;
  });
  
  $scope.user = {};
  $scope.emailSentMsg = "";
  $scope.selectedMP = "";

  $scope.email = function(user, postal_code) {
      
      var mpEmail = $filter('emailFilter')(postal_code, $scope.mps);
      var mpName = $filter('nameFilter')(postal_code, $scope.mps);
      var emailBody = jQuery('#emailBody').val();
      var xm; 
      
      var data = {
      'message': {
        'html': emailBody,
        'text': emailBody,
        'subject': user.subject,
        'from_email': user.email,
        'from_name': user.name,
        'to': [
          {
            name: mpName,
            email: mpEmail,
            'type': 'to'
          }
        ],
        'headers': {
          'Reply-To': 'anita@rakkatak.com'
        }
      }
    };

    Mandrill.messages.send(data).success(function(response){
		xm="Email has been sent";
		jQuery('#txt').html(xm);
    }).error(function(response){
		xm="Error sending email. status ["+response[0].status+"], reject_reason ["+response[0].reject_reason+"]" ;
		jQuery('#txt').html(xm);
    });
  };
  
  $scope.reset = function() {
      console.log('reset');
      $scope.user.email = "";
      $scope.user.name = "";
      $scope.user.subject =  "We support foreign workers";
      $scope.postal_code = "";
  };

  $scope.reset();

    
}]);
