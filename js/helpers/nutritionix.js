var NOT_MY_APP_ID = '2f93c877';
var NOT_MY_APP_KEY = '856fd9dc7309f10e7d89e52e81dccf78';
var NUTRITIONIX_URL_BASE = 'https://api.nutritionix.com/v1_1/search/';
var NUTRITIONIX_URL_SEARCH_FIELDS = 'fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&';

function getNutritionixInfo(searchTerm){
  // console.log('https://api.nutritionix.com/v1_1/search/' + searchTerm + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=2f93c877&appKey=856fd9dc7309f10e7d89e52e81dccf78');
  // nutritionixURL = 'https://api.nutritionix.com/v1_1/search/' + searchTerm + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=2f93c877&appKey=856fd9dc7309f10e7d89e52e81dccf78'
  $.getJSON(nutritionixURL, function( data ) {
    var response = data.hits;
    console.log(response);
  });
}