var app = app || {};

app.ResultView = Backbone.View.extend({
  tagName: 'div',
  className: 'resultsContainer',
  template: _.template( $( '#resultsTemplate' ).html() ),

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    return this;
  },

  destroy: function(){
    this.model.destroy();
    this.remove();
  }
});