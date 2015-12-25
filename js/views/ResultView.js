var app = app || {};

app.ResultView = Backbone.View.extend({
  tagName: 'div',
  className: 'resultsContainer',
  template: _.template( $( '#resultsTemplate' ).html() ),

  render: function() {
      //this.el is what we defined in tagName. use $el to get access to jQuery html() function
      this.$el.html( this.template( this.model.attributes ) );

      return this;
  }
});