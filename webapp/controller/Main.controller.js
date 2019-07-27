sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	// goes through the list and sets the .rank property equal to the  item's index.  Sloppy, but I don't know what else to do :(
	
	// ID String for the model containing product data.
	const productModel="primary_product_data";

	// This loops through the array and sets rank property value.
	const setAllRanks= function(model){
		var i;
		for (i=0; i<model.length; i++){
			model[i].rank=i;
			
		}
	};

	// returns the integer index of the clicked item in the productModel array.
	const getClickedItemIndex = function(oEvent){

		const trimString = function(str){
			let lastSlash = str.lastIndexOf("/");

			// start here next time.  cuts the number correctly, but probs need to convert to an integer.  
			let indexValue = str.slice((lastSlash + 1), str.length);
			console.log(indexValue);
		}
		//let dataPath = oEvent.getSource().getBindingContext(productModel).sPath;
		let dataPath = oEvent.getSource().getBindingContext(productModel).rank;
		console.log(dataPath);
		trimString(dataPath);

	};

	return Controller.extend("TM.ConceptRank.controller.Main", {

		onInit: function () {
		},
		
		onBeforeRendering: function(){
			
			// this is hacky, but not sure how to make a version where .this points to the parent function.
			var PDmodel = this.getView().getModel(productModel).oData.productList;

			console.log(PDmodel);
			setAllRanks(PDmodel);
			console.log(PDmodel);

		},
		upButton: function(oEvent){



			getClickedItemIndex(oEvent);

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