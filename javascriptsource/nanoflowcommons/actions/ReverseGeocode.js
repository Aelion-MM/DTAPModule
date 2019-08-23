// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * Reverse geocoding is the process of converting geographic coordinates (latitude and longitude) into a human-readable address.
 * @param {string} latitude - This field is required.
 * @param {string} longitude - This field is required.
 * @param {"NanoflowCommons.GeocodingProvider.Google"|"NanoflowCommons.GeocodingProvider.Geocodio"|"NanoflowCommons.GeocodingProvider.LocationIQ"|"NanoflowCommons.GeocodingProvider.MapQuest"} geocodingProvider - This field is required for use on web.
 * @param {string} providerApiKey - This field is required for use on web. Note that the keys are accessible by the end users and should be protected in other ways; for example restricted domain name.
 * @returns {string}
 */
function ReverseGeocode(latitude, longitude, geocodingProvider, providerApiKey) {
	// BEGIN USER CODE
  /**
   * Documentation:
   *  - Native: https://github.com/devfd/react-native-geocoder
   *  - Google: https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding
   *  - Geocodio: https://www.geocod.io/docs/#reverse-geocoding
   *  - LocationIQ: https://locationiq.com/docs-html/index.html#reverse-geocoding
   *  - MapQuest: https://developer.mapquest.com/documentation/open/geocoding-api/address/get/
   */
  if (!latitude) {
    throw new TypeError("Input parameter 'Latitude' is required");
  }
  if (!longitude) {
    throw new TypeError("Input parameter 'Longitude' is required");
  }
  if (navigator && navigator.product === "ReactNative") {
    var Geocoder = require("react-native-geocoder").default;
    var position = { lat: Number(latitude), lng: Number(longitude) };
    return Geocoder.geocodePosition(position).then(function (results) {
      if (results.length === 0) {
        throw new Error("No results found");
      }
      return results[0].formattedAddress;
    });
  }
  if (!geocodingProvider) {
    throw new TypeError("Input parameter 'Geocoding provider' is required for use on web");
  }
  if (!providerApiKey) {
    throw new TypeError("Input parameter 'Provider api key' is required for use on web");
  }
  latitude = encodeURIComponent(latitude);
  longitude = encodeURIComponent(longitude);
  providerApiKey = encodeURIComponent(providerApiKey);
  var url = getApiUrl(geocodingProvider, latitude, longitude, providerApiKey);
  return fetch(url).
  then(function (response) {return response.json().catch(function () {return response.text().then(function (text) {
        throw new Error(text);
      });});}).
  then(function (response) {return getAddress(geocodingProvider, response);});
  function getApiUrl(provider, lat, long, key) {
    switch (provider) {
      case "Google":
        return "https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(lat, ",").concat(long, "&key=").concat(key);
      case "Geocodio":
        return "https://api.geocod.io/v1.3/reverse?q=".concat(lat, ",").concat(long, "&api_key=").concat(key);
      case "LocationIQ":
        return "https://eu1.locationiq.com/v1/reverse.php?format=json&lat=".concat(lat, "&lon=").concat(long, "&key=").concat(key);
      case "MapQuest":
        return "https://www.mapquestapi.com/geocoding/v1/reverse?location=".concat(lat, ",").concat(long, "&key=").concat(key);}

  }
  function getAddress(provider, response) {
    switch (provider) {
      case "Google":
        if (response.status !== "OK") {
          throw new Error(response.error_message);
        }
        return response.results[0].formatted_address;
      case "Geocodio":
        if (response.error) {
          throw new Error(response.error);
        }
        if (response.results.length === 0) {
          throw new Error("No results found");
        }
        return response.results[0].formatted_address;
      case "LocationIQ":
        if (response.error) {
          throw new Error(response.error);
        }
        return response.display_name;
      case "MapQuest":
        if (response.info.statuscode !== 0) {
          throw new Error(response.info.messages.join(", "));
        }
        if (response.results.length === 0) {
          throw new Error("No results found");
        }
        var location = response.results[0].locations[0];
        var city = location.adminArea5;
        var country = location.adminArea1;
        return "".concat(location.street, ", ").concat(location.postalCode, " ").concat(city, ", ").concat(country);}

  }
	// END USER CODE
}