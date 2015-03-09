var app = angular.module("photoUploader", []);

app.controller("imageController", function($scope, $http) {
  $http.get("http://lamp-pedago/html/a2mm/hadrien.chevallier/hairfietst/jsondata/imgGetter.php")
    .success(function(response) {$scope.images = response;}).
    error(function(data) {
      // log error
    });
    this.focusImage=null;


    this.onFocus=function(selectedImage){
    	this.focusImage=selectedImage;
    	
    };

    this.unfocus=function(){
    	this.focusImage=null;
    };

    this.chkFocus=function(){
    	if(this.focusImage===null)
    		return false;
    	else 
    		return true;
    };
});