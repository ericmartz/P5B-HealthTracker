var app = app || {};

// ResultList is the collection that holds the search results from the search query
app.ResultList = Backbone.Collection.extend({
  model : app.Result,
});

