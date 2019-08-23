// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * @param {string} key - This field is required.
 * @returns {boolean}
 */
function RemoveStorageItem(key) {
	// BEGIN USER CODE
  if (!key) {
    throw new TypeError("Input parameter 'Key' is required");
  }
  return removeItem(key).then(function () {return true;});
  function removeItem(key) {
    if (navigator && navigator.product === "ReactNative") {
      var AsyncStorage = require("@react-native-community/async-storage").default;
      return AsyncStorage.removeItem(key);
    }
    if (window) {
      window.localStorage.removeItem(key);
      return Promise.resolve();
    }
    throw new Error("No storage API available");
  }
	// END USER CODE
}