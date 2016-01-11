var app = app || {};

app.TotalCaloriesView = Backbone.View.extend({
  el: '#total-calories',
  className: 'totalCaloriesContainer',
  template: _.template( $( '#totalCaloriesTemplate' ).html() ),

  initialize: function(){
    this.listenTo(app.totals_collection, 'add', this.totalItems);
    this.totalCalories = 0;
    this.$el.text(this.totalCalories);
  },

  totalItems: function(){
    this.totalCalories = 0;
    app.totals_collection.each(function(item){
      this.totalCalories += item.attributes.nf_calories;
    });
    this.$el.text(this.totalCalories);
    // console.log(totalCalories);
  }

});