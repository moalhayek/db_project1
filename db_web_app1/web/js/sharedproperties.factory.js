var app = angular.module('db-project');

app.factory('sharedProperties',function($http,$timeout){
    var properties = {
        'barNames': [],
        'musicData': [],
        'allBeers': [],
        'allBars': []
        //add whatever properties we want here, JSON style
    };

    var path = 'http://ec2-18-216-165-164.us-east-2.compute.amazonaws.com:8080/db_project/rest/'
    return{
        //simple getter
        getProperty: function(whichProperty){
            return properties[whichProperty];
        },
        //simple setter
        setProperty: function(whichProperty,whichVal){
            properties[whichProperty] = whichVal;
        },
        //function template for http request, just need params as JSON
        httpReq: function(options){
            return $http({
                method: options.method,
                url: path+options.url,
                params: options.params
            }).then(function mySuccess(response){
                console.log('the request went well!');
                return response.data;

            },function myError(response){
                console.log(response.statusText);
                console.log('the function failed horribly');
            })
        }
    }
});