angular.module("MyFirstApp",[]).controller("FirstApp",function($scope,$http){
    $scope.saludo = "REST API"
    $scope.posts = []
    $scope.newPost = {}
    // PETICION GET
    $http.get("https://jsonplaceholder.typicode.com/posts").success(function(data){
        $scope.posts=data
        console.log(data)
    }).error(function(err){
        console.log(err)
    })

    // PETICION POST 
    $scope.addPost = function(){
        $http.post("https://jsonplaceholder.typicode.com/posts",{
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId:1
        })
        .success(function(data,status,headers,config){
            $scope.posts.push($scope.newPost)
            $scope.newPost = {}
        }).error(function(err,data,status,headers,config){
            console.log(err)
        })
    }
})