var app = app || {};

// DailyItemsList is the collection that holds food items the user has selected
app.DailyItemsList = Backbone.Collection.extend({
  model : app.DailyItem,

  localStorage: new Backbone.LocalStorage("daily-items")
});

app.totals_collection = new app.DailyItemsList();