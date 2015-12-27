var app = app || {};

app.ResultView = Backbone.View.extend({
  tagName: 'div',
  className: 'resultsContainer',
  template: _.template( $( '#resultsTemplate' ).html() ),

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
      //this.el is what we defined in tagName. use $el to get access to jQuery html() function
      this.$el.html( this.template( this.model.attributes ) );

      return this;
  },

  destroy: function(){
    this.model.destroy();
    this.remove();
  }
});