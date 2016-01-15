var app = app || {};

app.DailyItem = Backbone.Model.extend({
  defaults: {
    item_id: '',
    brand_name: '',
    item_name: '',
    nf_calories: '',
    item_date: ''
  },
});