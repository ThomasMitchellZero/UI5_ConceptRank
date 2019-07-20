sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/Formatter_GetIndex"
], function (Controller, JSONModel, FGI) {
	"use strict";

	return Controller.extend("TM.ConceptRank.controller.Main", {
		
		mathematize: FGI,

		getRank: function(){
			return 7;
		},

		onInit: function () {

		},
		
		onBeforeRendering: function(){

		},
		upButton: function(oEvent){
			
			const ProdMod = "primary_product_data";
			var PDmodel = this.getView().getModel(ProdMod);
			
			// this generates the path.  if I can just get the index, I can do this.
			var dataPath = oEvent.getSource().getBindingContext("primary_product_data").sPath;
			console.log(dataPath);	
		},
		downButton: function(){
			console.log("DOWN!");
		}
		
		
	});
});

/*
Not sure how this is working, but I think it's got the path of the item.

This is a link to the Event object in the SDK
	https://sapui5.hana.ondemand.com/#/api/sap.ui.base.Event


AFAICT this is the same result as above:
	var dataArray = oEvent.getSource().getBindingContext("primary_product_data");


*/