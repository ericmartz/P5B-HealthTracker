var app = app || {};

app.DailyItemsList = Backbone.Collection.extend({
  model : app.DailyItem,

  localStorage: new Backbone.LocalStorage("daily-items")
});

app.totals_collection = new app.DailyItemsList();