var app = app || {};

app.TotalCaloriesView = Backbone.View.extend({
  el: '#total-calories',
  className: 'totalCaloriesContainer',
  template: _.template( $( '#totalCaloriesTemplate' ).html() ),

  initialize: function(){
    app.totalCalories = 0;
    this.$el.text(app.totalCalories);

    this.listenTo(app.totals_collection, 'add', this.totalItems);

    this.totalItems();
  },

  totalItems: function(){
    app.totalCalories = 0;
    app.totals_collection.each(function(item){
      app.totalCalories += item.attributes.nf_calories;
    });
    this.$el.text(app.totalCalories);
    // console.log(totalCalories);
  }

});