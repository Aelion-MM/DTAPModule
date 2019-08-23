// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * @param {string} key - This field is required.
 * @returns {boolean}
 */
function StorageItemExists(key) {
	// BEGIN USER CODE
  if (!key) {
    throw new TypeError("Input parameter 'Key' is required");
  }
  return getItem(key).then(function (result) {return result !== null;});
  function getItem(key) {
    if (navigator && navigator.product === "ReactNative") {
      var AsyncStorage = require("@react-native-community/async-storage").default;
      return AsyncStorage.getItem(key);
    }
    if (window) {
      var value = window.localStorage.getItem(key);
      return Promise.resolve(value);
    }
    throw new Error("No storage API available");
  }
	// END USER CODE
}