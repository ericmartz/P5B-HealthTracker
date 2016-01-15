var app = app || {};

// Result holds the individual items from a search query
app.Result = Backbone.Model.extend({
  defaults: {
    item_id: '',
    brand_name: '',
    item_name: '',
    nf_calories: '' 
  },
});