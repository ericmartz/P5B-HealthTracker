var app = app || {};

app.DailyItemsList = Backbone.Collection.extend({
  model : app.DailyItem,
});