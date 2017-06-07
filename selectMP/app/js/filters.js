'use strict';

/* Filters */

angular.module('mpFilters', []).filter('emailFilter', function() {
  return function(input, mps) {
    if (input) {
        var iPostCode = input.toUpperCase().replace(" ", "");
    	for (var i = 0; i < mps.length; i++) {
       		for (var j = 0; j <mps[i].postal_code.length; j++) {
         		if (mps[i].postal_code[j]==iPostCode) {
           			console.log("SUCCESS");
           			return mps[i].email;
         		}
       		}
    	}
    }
  };
}).filter('nameFilter', function() {
  return function(input, mps) {
    if (input) {
        var iPostCode = input.toUpperCase().replace(" ", "");
    	for (var i = 0; i < mps.length; i++) {
       		for (var j = 0; j <mps[i].postal_code.length; j++) {
         		if (mps[i].postal_code[j]==iPostCode) {
           			console.log("SUCCESS");
           			return mps[i].name;
         		}
       		}
    	}
    }
  };
});
