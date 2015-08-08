var myAppCtrls = angular.module('myAppCtrls',[]);

 myAppCtrls.controller('turntoCtrl',
 	function($scope,Friend){
 		$scope.friends = Friend.query();

 		$scope.title = '点击展开';
 		$scope.text = '展开内容';

 });


myAppCtrls.controller('alertCtrl',['$scope',function($scope){
	$scope.alertone = alert('这是B的展示页面');
}])

myAppCtrls.controller('numCtrl',['$scope',function($scope){

	$scope.num = 0;

	$scope.addnumber = function(){
		$scope.num+=1;
	 }

}]);

