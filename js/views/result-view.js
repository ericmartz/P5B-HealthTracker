var app = app || {};

app.ResultView = Backbone.View.extend({
  tagName: 'div',
  className: 'resultsContainer',
  template: _.template( $( '#resultsTemplate' ).html() ),

  events: {
    'click li': 'addToTotals'
  },

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  destroy: function(){
    this.model.destroy();
    this.remove();
  },

  // Originally, I tried to build the function addToTotals in the ResultsView.
  // Had an issue figuring out which item was clicked, and some searching led to the article below by Derick Bailey
  // https://lostechies.com/derickbailey/2011/10/11/backbone-js-getting-the-model-for-a-clicked-element/
  // So I moved addToTotals here and this became super easy.  Also, I feel like I understand Backbone more clearly now,
  // especially why you would want to separate the collection view and the model view.
  addToTotals: function(e){
    e.preventDefault();
    var name = this.model;
    var item = new app.DailyItem({
      item_id: name.attributes.item_id,
      item_name: name.attributes.item_name,
      brand_name: name.attributes.brand_name,
      nf_calories: name.attributes.nf_calories
    })
    // console.log(name);
    app.totals_collection.add(item);
    item.save();
  }
});