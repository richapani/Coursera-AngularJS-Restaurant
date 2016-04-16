'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource','baseURL',function($resource,baseURL) {
    
            
          
                
                    
                    this.getDishes = function(){
                                        return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                                    };
                    
                this.getPromotion=function(){
                    return $resource(baseURL+"promotions/:id",null,null);
                };
    
                //this.getDish = function (index) {
                    
                    //return $http.get(baseURL+"dishes/"+index);
                //};
                
               // this.getPromotion=function(index){

                 // return promotions[index];

                //};

                // implement a function named getPromotion
                // that returns a selected promotion.
    
                        
        }])

        .factory('corporateFactory', ['$resource','baseURL', function($resource,baseURL) {
    
            var corpfac = {};
    
          
            
             corpfac.getLeaders = function(){
                    return $resource(baseURL+"leadership/:id",null,null);
                   // return leadership;
                    
                };
    
                
            
    return corpfac;
        }])
        .factory('feedbackFactory', ['$resource','baseURL', function($resource,baseURL) {
    
            var feedfac = {};
    
          
            
             feedfac.getFeedback = function(){
                    return $resource(baseURL+"feedback/:id",null,{'update':{method:'PUT' }});
                   // return leadership;
                    
                };
    
                
            
    return feedfac;
        }])

;
