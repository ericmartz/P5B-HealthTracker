var app = app || {};

// DailyItem holds the items the user has added as selected foods
app.DailyItem = Backbone.Model.extend({
  defaults: {
    item_id: '',
    brand_name: '',
    item_name: '',
    nf_calories: '',
    item_date: ''
  },
});