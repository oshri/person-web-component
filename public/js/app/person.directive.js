app.directive('person', [function () {
	return {
		restrict: 'E',
		templateUrl: 'views/person.html',
		replace: true
	};
}]);