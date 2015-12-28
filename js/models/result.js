var app = app || {};

app.Result = Backbone.Model.extend({
  defaults: {
    item_id: '',
    brand_name: '',
    item_name: '',
    nf_calories: '' 
  },
});