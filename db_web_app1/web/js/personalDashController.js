var app = angular.module('db-project');

app.controller('personalDashController',function(sharedProperties){
    this.noCache = true;

    this.barSelected = false;

    this.recalcData = function(){
        this.barSelected = false;
        this.barSelected = true;
    };

    this.getBars = function(){
        
        var options = {
            url: 'bars/getBarNames',
            params: {},
            method: 'GET',
            destination: 'barNames'//this is the global property you want to update
        }
        var promise =  sharedProperties.httpReq(options);
        promise.then(function(res){
            var temp = res.bars
            console.log(temp)
            temp.splice(0,1)
            console.log(temp)
            sharedProperties.setProperty('barNames',temp)
            console.log(sharedProperties.getProperty('barNames'))
        }.bind(this));
        
    };
    this.allBars = function(){
        return sharedProperties.getProperty('barNames');
    };
    
    this.searchBarNames = function(searchText){
        var results = searchText ? this.allBars.filter(createFilterFor(query)): self.allBars;

        return results;
    }

    this.createFilterFor = function(query){
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(name){
            return (name.value.indexOf(lowercaseQuery)===0);
        };
    };
});

//this will be all info about the personal bartender module


