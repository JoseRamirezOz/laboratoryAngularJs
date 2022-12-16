angular.module("MyFirstApp",[])
.controller("FirstController",function($scope){
    $scope.nombre="Pepe Pica Papas"
    $scope.nuevoComentario = {}
    $scope.comentarios = [
        {
            comentario: "Excelente discurso",
            username: "Jose"
        },
        {
            comentario: "Puede mejorar la presentacion",
            username: "Alberto"
        },
        {
            comentario: "Una presentacion eficiente",
            username: "Alberto Ramirez"
        }
    ]
    $scope.agregarComentario = function(){
        console.log("Si funciona")
        $scope.comentarios.push($scope.nuevoComentario)
        $scope.nuevoComentario = {}
    }
});