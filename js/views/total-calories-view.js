var app = app || {};

app.TotalCaloriesView = Backbone.View.extend({
  el: '#total-calories',
  className: 'totalCaloriesContainer',
  template: _.template($('#totalCaloriesTemplate').html()),

  events: {
    'click #clear-totals': 'clearTotals'
  },

  initialize: function(){
    app.totalCalories = 0;

    this.$el.html(this.template({totalCalories: app.totalCalories}));

    this.listenTo(app.totals_collection, 'add', this.totalItems);

    this.totalItems();
  },

  totalItems: function(){
    app.totalCalories = 0;
    app.totals_collection.each(function(item){
      app.totalCalories += item.attributes.nf_calories;
    });
    this.$el.html(this.template({totalCalories: app.totalCalories}));
    // console.log(totalCalories);
  },

  clearTotals: function(e){
    e.preventDefault();
    localStorage.clear();
  }

});