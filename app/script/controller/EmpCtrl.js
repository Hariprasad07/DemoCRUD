"use strict"
//a=90;
var app = angular.module('MyApp', []);
app.controller('EmpCtrl', ["$scope", function ($scope) {
    $scope.Employes = [
        {name: 'sathish', id: 100, salary: 10000},
        {name: 'kushi', id: 580, salary: 90000},
        {name: 'kumar', id: 356, salary: 25623},
        {name: 'venki', id: 212, salary: 25500}

    ]
// ADD NEW Employe
    $scope.add = function () {

        var emp = {
            id: $scope.id,
            name: $scope.name,
            salary: $scope.salary
        };
        // console.log($scope.id)

        $scope.Employes.push(emp);
        $scope.id = "",
            $scope.name = "",
            $scope.salary = ""
        alert("sucessfully add")

    }

    //Edit.......
    $scope.edit=function (id) {
        console.log(id);
        for(var i=0;i<$scope.Employes.length;i++){
            if($scope.Employes[i].id==id){
                $scope.id=$scope.Employes[i].id;
                $scope.name=$scope.Employes[i].name;
                $scope.salary=$scope.Employes[i].salary;
            }
        }

    }
//update
    $scope.update=function (id) {
        for(var i=0;i<$scope.Employes.length;i++){
            if($scope.Employes[i].id==id){
                $scope.Employes[i].id=$scope.id;
                $scope.Employes[i].name= $scope.name;
                $scope.Employes[i].salary=$scope.salary;
            }
        }

    }

//delete...
    $scope.del=function (id) {
        var res=confirm("Are you sure delete");
        if(res) {
            for (var i = 0; i < $scope.Employes.length; i++) {
                if ($scope.Employes[i].id == id) {
                    $scope.Employes.splice(i, 1);
                }
            }
            alert("sucessfully deleted")
        }else{
            alert("sorry unable to delete")
        }

    }
}]);