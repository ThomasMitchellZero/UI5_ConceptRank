// One cool thing about this approach.  We're adding extra functionality to the controller component, but we only want these methods used, not the whole controller.  By naming it BaseController.js instead of BaseController.controller.js, we prevent this from ever being used in a view.

//Because this has useful functionality that the base controller does not, all future controllers I make should be extended from this BaseController.js file, not the OG Controller component.

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";
	return Controller.extend("TM.ConceptRank.controller.BaseController", {
    
    // I suppose I should note that getRouter is a custom function, not an OTS function.  That might have been what was causing routing problems last time.
    getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
      
      // checks to see if there is a previous hash value (i.e. URL) in the history.  If there is, it goes back one step (I assume this is the -1)
      if (sPreviousHash !== undefined) {
        window.history.go(-1);
        
      // if there is no history, it just takes you back to the Home page.
			} else {

        // NameHome is the value of the "name" property in the home page object in the "routes" object of the manifest.json file.
				this.getRouter().navTo("NameHome", {}, true /*no history*/);
			}
		}
	});
});