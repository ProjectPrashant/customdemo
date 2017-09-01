var myApp= angular.module("myApplication",[])
                   .controller("customfiltercontroller",function($scope){
                     var listdata=[
                {name:"Prashant",gender:1 ,salary:"20000",city:"Pune"},
                         {name:"Madhav",gender:1 ,city:"Pune"},
                         {name:"Sampat",gender:1,city:"Wifal"},
                         {name:"Rakesh",gender:1,city:"Kolhapur"},
                         {name:"Kirti",gender:2 ,city:"Nagpur"},
                         {name:"Kajal",gender:2,city:"Mumbai"},
                         {name:"Ujjany",gender:3,city:"Kanpur"}
            ];
                      
                       $scope.employees=listdata;
                     
    });
                     