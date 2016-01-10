var app = app || {};

app.TotalCaloriesView = Backbone.View.extend({
  el: '#total-calories',
  className: 'totalCaloriesContainer',
  template: _.template( $( '#totalCaloriesTemplate' ).html() ),

  initialize: function(){
    this.listenTo(app.totals_collection, 'add', this.totalItems);
  },

  totalItems: function(){
    var totalCalories = 0;
    app.totals_collection.each(function(item){
      totalCalories += item.attributes.nf_calories;
    });
    this.$el.text(totalCalories);
    // console.log(totalCalories);
  }

});