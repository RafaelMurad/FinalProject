angular.module('LucasApp', ['ngRoute', 'RouteControllers', 'LucasDirective']);

/*var todoApp =*/ angular.module('LucasApp').config(function($routeProvider) {
	
	$routeProvider.when('/', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})
	
	.when('/gallery', {
		templateUrl: 'templates/gallery.html',
		controller: 'GalleryController'
	})

	.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	})
	

	/*
	.when('/gallery/coment', {
		templateUrl: 'templates/coment.html',
		controller: 'ComentController'
	});
*/
	
});

/*todoApp.run(function($rootScope,store){
	$rootScope.store = store;
});*/
