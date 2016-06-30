angularApp.service('PracticeSvc', [ function(){
	
	var svc = this;
    
    /*
	  Get all of the following names in this array to show up on the screen
	  with first letter of their first name capital and first letter of their last
	  name capital
	*/

	var allNames = ["ryan Eghrari", 
	"Elon musk", 
	"Jeff BeZos", 
	"Thomas EdIson", 
	"SHAQ", 
	"50 CEnt",
	"Klay THompson",
	"J.R. SmITh",
	"EvA LonGson",
	"wyatt Karch",
	"EmIlY longwood",
	"Ashley kepsi",
	"joe george"
	]

    /*
	* Get Names                                   //Name of the function
	* 
	* formats and returns the names 
    *
	* returns Array - array of strings of mint names     
	*/
	svc.getNames = function()
	{
        //do your thing
        //do your thing
        format(allNames);
        
        
        
		return allNames;
	}
    
    svc.removeName = function(index){
        allNames.splice(index,1);
    }
    
    svc.addPerson = function(person){
        allNames.push(person);
    }
    
    /* Format
    *
    * This takes all the names and makes them lowercaser
    *
    * returns vodi
    */
    var format = function(names){
       arrToLowerCase(names)
    }
    
    var arrToLowerCase = function(names){
         for (var i=0; i < names.length; i++){
             names[i] = names[i].toLowerCase()
        }
    }



    
}]);
