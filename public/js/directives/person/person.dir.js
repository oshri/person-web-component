(function(angular){
	'use strict';
	angular.module("app").directive('person', [function () {
		return {
			restrict: 'E',
			scope:{
				model: "="
			},
			replace: true,
			link: function(scope, element, attrs){

			},
			template:[
				'<div class="person">',
				    '<div class="avatar">',
				        '<img ng-src="img/{{model.image}}" alt="{{model.fullName}}" class="img-responsive">',
				    '</div>',
				    '<div class="info text-center">',
				        '<h2 ng-bind="model.fullName"></h2>',
				        '<span ng-bind="model.position" class="position"></span>',
				        '<span ng-bind="model.company" class="company"></span>',
				    '</div>',
				    '<div class="summary">',
				        '<p class="lead" ng-bind="model.summary"></p>',
				    '</div>',
				'</div>'
			].join('')
		};
	}]);	
})(window.angular);
