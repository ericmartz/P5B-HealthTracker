// Below are the constants used to build the request to nutritionix
// As a joke on my last project, I prefixed my keys for API requests with NOT_MY...
// Kind of a security by obfuscation thing, which of course, isn't secure at all.  So I did that here.
var NOT_MY_APP_ID = '2f93c877';
var NOT_MY_APP_KEY = '856fd9dc7309f10e7d89e52e81dccf78';
var NUTRITIONIX_URL_BASE = 'https://api.nutritionix.com/v1_1/search/';
var NUTRITIONIX_URL_SEARCH_FIELDS = '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&';

// assembleNutritionixURL does just what us says it does
function assembleNutritionixURL(searchTerm){
  var url = NUTRITIONIX_URL_BASE;
  url += searchTerm + NUTRITIONIX_URL_SEARCH_FIELDS;
  url += 'appId=' + NOT_MY_APP_ID;
  url += '&appKey=' + NOT_MY_APP_KEY;
  return url;
}

// getNutritionixInfo gets the URL for the API request and builds and then returns the API request
function getNutritionixInfo(searchTerm){
  var nutritionixURL = assembleNutritionixURL(searchTerm);
  return $.getJSON(nutritionixURL, function(data) {});
}