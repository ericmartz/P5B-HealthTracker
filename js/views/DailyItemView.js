var app = app || {};

app.DailyItemView = Backbone.View.extend({
  tagName: 'div',
  className: 'dailyTotalsContainer',
  template: _.template( $( '#dailyItemsTemplate' ).html() ),

  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    return this;
  },

  destroy: function(){
    this.model.destroy();
    this.remove();
  },

});