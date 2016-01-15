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

    this.listenTo(app.totals_collection, 'destroy', this.totalItems);

    this.totalItems();
  },

  deleteFoodItem: function(child){
    var deleteItem = new app.DailyItemView({
      model: child
    });
    deleteItem.destroy();
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
    var self = this;
    e.preventDefault();
    localStorage.clear();

    for(var i = (app.totals_collection.models.length - 1); i > -1; i--){
      self.deleteFoodItem(app.totals_collection.models[i]);
    }
  }

});