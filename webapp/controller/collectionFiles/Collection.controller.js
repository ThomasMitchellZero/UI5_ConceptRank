sap.ui.define([
  "TM/ConceptRank/controller/BaseController"
], function (BaseController) {
  "use strict";

  return BaseController.extend("TM.ConceptRank.controller.Collection", {

    onInit: function(){

      var oRouter= this.getRouter();
      // not sure if the name parameter of the routes object is what I am supposed to be getting.
      oRouter.getRoute("collection").attachMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function(oEvent){
      var oArgs, oView;
      oArgs = oEvent.getParameter("arguments");
      console.log(oArgs);
      oView = this.getView();
      
      oView.bindElement({


				path : "/Employees(" + oArgs.employeeId + ")",  // this is wrong - not adapted to my particular context.
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});

    }

  });

});