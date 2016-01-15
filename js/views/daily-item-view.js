var app = app || {};

app.DailyItemView = Backbone.View.extend({
  tagName: 'div',
  className: 'dailyTotalsContainer',
  template: _.template( $( '#dailyItemsTemplate' ).html() ),

  // initialize creates the listener for when models are destroyed
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },

  // render adds the individual items to the view
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  // destroy removes models from the DailyItemView
  destroy: function(){
    this.model.destroy();
    this.remove();
  },

});