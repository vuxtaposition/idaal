
    var cutApp = angular.module('idaalApp', []);


	  
	  
	  
      cutApp.controller('MainCtrl', function ($scope, $http){
        $http.get('json/organisations.json').success(function(data) {
          $scope.organisations = data;
        });

	
      });



      cutApp.controller('MainCtrl2', function ($scope, $http){
		 $scope.sortField = 'name';
		 $scope.reverse = true;
        $http.get('json/link_details.json').success(function(data) {
          $scope.emps = data;
		  //alert('emp');
        });

	
      });

      /*	  cutApp.controller('PanelController',function(){
      this.tab = 1;
      
      this.selectTab = function(setTab){
         this.tab = setTab;
      }
      
      this.isSelected = function(checkTab){
         return this.tab === checkTab;
      }
      
    }) ;
	
	
	
	
	   cutApp.controller('CutCtrl2', function ($scope, $http, $routeParams){
         $scope.employeeName = $routeParams.employeeName;
		 $http.get('../json/employees.json').success(function(data) {
         
		 
		  $scope.emp = data.filter(function(entry){
			return entry.name == $scope.employeeName; 
		 })[0];
		  console.log(emp);
		 
        });
	
	
      });




cutApp.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : '../contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
				$scope.formData.inputName="";
				$scope.formData.inputEmail="";
				$scope.formData.inputSubject="";
				$scope.formData.inputMessage="";
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
});*/