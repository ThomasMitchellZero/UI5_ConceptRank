sap.ui.define([], function () {
	"use strict";
	

	return {
		calcIndex: function (model) {
			
			var i;
			for (i=0; i<model.length; i++){
				model[i].rank=i;
				
			}
		}
	};
});