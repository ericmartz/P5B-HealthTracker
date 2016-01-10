var app = app || {};

app.DailyItemsView = Backbone.View.extend({
  el: '#daily-totals',

  initialize: function(){

    app.totals_collection = new app.DailyItemsList();

    this.listenTo(app.totals_collection, 'add', this.renderItem);

  },

  // Leaving renderTotals here for now.  However, rather than using render totals, I found I needed to 
  // use renderItem when listening to app.totals_collection. So when an item is added to the totals_collection
  // then that one item is rendered.  If I use the renderTotals function, then the whole collection is rendered. 
  renderTotals: function(){
    app.totals_collection.each(function(item){
      this.renderItem(item);
    }, this);
  },

  renderItem: function(item){
    var itemView = new app.DailyItemView({
      model: item
    });
    this.$el.append(itemView.render().el);
  }

});