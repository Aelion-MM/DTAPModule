// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * @returns {"NanoflowCommons.Platform.Web"|"NanoflowCommons.Platform.Native_mobile"|"NanoflowCommons.Platform.Hybrid_mobile"}
 */
function GetPlatform() {
	// BEGIN USER CODE
  if (window && window.cordova) {
    return "Hybrid_mobile";
  } else
  if (navigator && navigator.product === "ReactNative") {
    return "Native_mobile";
  } else
  {
    return "Web";
  }
	// END USER CODE
}