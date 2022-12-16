angular.module("MyFirstApp",[]).controller("FirstApp",function($scope,$http){
    $scope.saludo = "REST API"
    $scope.posts = []
    $scope.newPost = {}
    // PETICION GET
    $http.get("https://jsonplaceholder.typicode.com/posts").success(function(data){
        //$scope.posts=data
        console.log(data)
    }).error(function(err){
        console.log(err)
    })

    // PETICION POST 
    /*$scope.send=function(){
        $http.post("https://jsonplaceholder.typicode.com/posts",{
        userId: 1,
        title: $scope.newPost.title,
        body: $scope.newPost.body
        })
    }
    
    .success(function(err,status,headers,config){
    })
    .error(function(err){
        console.log(err)
    })*/
})