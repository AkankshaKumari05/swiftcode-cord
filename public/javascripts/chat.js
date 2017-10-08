var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {


$scope.messages=[
{
'sender':'USER',
'text':'hi',
'time':'10:01 AM'
},
{
'sender':'BOT',
'text':'How do I help you?',
'time':'10:01 AM'
},
{
'sender':'USER',
'text':'news about India',
'time':'10:01 AM'
},
{
'sender':'BOT',
'text':'Invalid',
'time':'10:02 AM'
}]


});
