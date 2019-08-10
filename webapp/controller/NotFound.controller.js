sap.ui.define([
  "TM/ConceptRank/controller/BaseController"
], function (BaseController) {
  "use strict";
  return BaseController.extend("TM.ConceptRank.controller.NotFound", {
    onInit: function () {


      //  This section is a mystery.   Start the untangling here.
      var oRouter, oTarget;
			oRouter = this.getRouter();
			oTarget = oRouter.getTarget("notFound");
			oTarget.attachDisplay(function (oEvent) {
        console.log(oTarget);
        console.log(oEvent);
        this._oData = oEvent.getParameter("data"); //store the data

			}, this);
    },

    // override the parent's onNavBack (inherited from BaseController)
		onNavBack : function (oEvent){

      // If ._oData is not empty and ._oData.fromTarget is not empty
			if (this._oData && this._oData.fromTarget) {

        console.log(this._oData);
        // ._oData.fromTarget is a key we specified, and its value is a link 
				this.getRouter().getTargets().display(this._oData.fromTarget);
				delete this._oData.fromTarget;
				return;
			}
			// call the parent's onNavBack
			BaseController.prototype.onNavBack.apply(this, arguments);
		}
  });
});