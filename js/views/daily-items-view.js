var app = app || {};

app.DailyItemsView = Backbone.View.extend({
  el: '#daily-totals',

  // initialize creates a listener for when items are added to the totals_collection,
  // and fetchs all items that are already in the totals_collection
  initialize: function(){
    this.listenTo(app.totals_collection, 'add', this.renderItem);

    app.totals_collection.fetch();
  },

  // render is run to display items that already exist in the totals_collection
  render: function(){
    app.totals_collection.each(this.renderItem, this);
  },

  // Leaving renderTotals here for now.  However, rather than listening to renderTotals in line 10, I found I needed to 
  // use renderItem when listening to app.totals_collection. So when an item is added to the totals_collection
  // then that one item is rendered.  If I use the renderTotals function, then the whole collection is rendered. 
  renderTotals: function(){
    app.totals_collection.each(function(item){
      this.renderItem(item);
    }, this);
  },

  // renderItem creates the items in the model and renders it.
  renderItem: function(item){
    var itemView = new app.DailyItemView({
      model: item
    });
    this.$el.append(itemView.render().el);
  }
});