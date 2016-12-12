angular.module('RouteControllers', [])

.controller('AboutController', function($scope) {
        
    })

.controller('GalleryController', function($scope){
		$scope.images=[ 
			{src: 'img/photo1.jpg', desc: 'Amazing streets'},
			{src: 'img/photo2.jpg', desc:'Mother nature'},
			{src: 'img/photo3.jpg', desc:'Bridges'},
			{src: 'img/photo4.jpg', desc:'Amazing streets'},
			{src: 'img/photo6.jpg', desc:'Mother nature'}
		];
})

.controller('ContactController', function($scope){
});