var myAppServices = angular.module('myAppServices',['ngResource']);

myAppServices.factory('Friend',
	function($resource){
		return $resource('info/friends.json',{},{
			query:{method:'GET',isArray:true}
		});
	});

