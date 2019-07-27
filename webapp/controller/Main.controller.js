sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";

	return Controller.extend("TM.ConceptRank.controller.Main", {

		onInit: function () {
		},
		
		onBeforeRendering: function(){
		}
		
		
	});
});

/*

{
	"conceptCollectionList":[
		{
			"collectionMeta":{
				"collectionName":"AcaVor Camera Concepts"
			},
			"productList":[
				{
					"rank":0,
					"name":"Different",
					"cord":"bottom",
					"imgURL":"model/AcaVorRenders/Original_Concepts_005.1193.png",
					"commentContent":""
				},
				{
					"rank":0,
					"name":"Changed",
					"cord":"top",
					"imgURL":"model/AcaVorRenders/Original_Concepts_005.1194.png",
					"commentContent":"this has content"
				},
				{
					"rank":0,
					"name":"Third",
					"cord":"bottom",
					"imgURL":"model/AcaVorRenders/Original_Concepts_005.1195.png",
					"commentContent":""
				}
			]
		},
		{
			"collectionMeta":{
				"collectionName":"Woodlands Rack Concepts"
			},
			"productList":[
				{
					"rank":0,
					"name":"Woody",
					"imgURL":"model/WoodlandsRenders/Back_Band_001.211.jpg",
					"commentContent":""
				},
				{
					"rank":0,
					"name":"Landy",
					"imgURL":"model/WoodlandsRenders/Back_Board_001.231,jpg",
					"commentContent":"this has content"
				},
				{
					"rank":0,
					"name":"Woodland",
					"imgURL":"model/WoodlandsRenders/Back_Board_001.231,jpg",
					"commentContent":""
				}
			]
		}
	]
}

*/