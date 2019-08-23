// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * @param {string} key - This field is required.
 * @param {string} value - This field is required.
 * @returns {boolean}
 */
function SetStorageItemString(key, value) {
	// BEGIN USER CODE
  if (!key) {
    throw new TypeError("Input parameter 'Key' is required");
  }
  if (!value) {
    throw new TypeError("Input parameter 'Value' is required");
  }
  return setItem(key, value).then(function () {return true;});
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      var AsyncStorage = require("@react-native-community/async-storage").default;
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    throw new Error("No storage API available");
  }
	// END USER CODE
}