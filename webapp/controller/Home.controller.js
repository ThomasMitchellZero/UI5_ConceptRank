sap.ui.define([
  "TM/ConceptRank/controller/BaseController"
], function (BaseController) {
  "use strict";

  return BaseController.extend("TM.ConceptRank.controller.Home", {
    onDisplayNotFound: function(oEvent){
      //display the "notFound" target without changing the hash.  AFAICT the second argument (the object containing fromTarget) just adds its contents as properties of the display object.  

			this.getRouter().getTargets().display("notFound", {
        
        // fromTarget is a key name we just made up.  It is not a hook, and could be called anything.
        fromTarget: "targethome"
      });
    },

    onNavToAddCollection: function(){
      this.getRouter.navTo("")
    }
  });

});