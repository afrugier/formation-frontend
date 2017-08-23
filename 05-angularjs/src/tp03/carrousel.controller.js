export default function CarrouselCtrl($scope, $interval) {
    $scope.images = [
        { 'name': 'New York', 'url': 'img/nyc.jpg' },
        { 'name': 'Paris', 'url': 'img/paris.jpg' },
        { 'name': 'Rio de Janeiro', 'url': 'img/rio-de-janeiro.jpg' },
        { 'name': 'Rome', 'url': 'img/rome.jpg' },
        { 'name': 'Tokyo', 'url': 'img/tokyo.jpg' }
    ];
    $scope.currentId = 0;

    $scope.next = function(){
        if($scope.currentId == $scope.images.length-1)
            $scope.currentId = 0;
        else
            $scope.currentId++;
    };

    $interval( () => $scope.next(), 2000);

    $scope.previous = function(){
        if($scope.currentId == 0)
            $scope.currentId = $scope.images.length-1;
        else
            $scope.currentId--;
    };
}