var app = app || {};

// TotalCaloriesView manages the display of how many calories the user has entered
app.TotalCaloriesView = Backbone.View.extend({
  el: '#total-calories',
  className: 'totalCaloriesContainer',
  template: _.template($('#totalCaloriesTemplate').html()),

  events: {
    'click #clear-totals': 'clearTotals'
  },

  // initialize sets the totalCalories to 0,
  // sends the info to the view,
  // and creates the listeners for when items are added or deleted from the totals_collection
  initialize: function(){
    app.totalCalories = 0;

    this.$el.html(this.template({totalCalories: app.totalCalories}));

    this.listenTo(app.totals_collection, 'add', this.totalItems);
    this.listenTo(app.totals_collection, 'destroy', this.totalItems);
  },

  // deleteFoodItem accepts a single foot item and send a request to the DailyItemView to delete the model
  deleteFoodItem: function(child){
    var deleteItem = new app.DailyItemView({
      model: child
    });
    deleteItem.destroy();
  },

  // totalItems loops through the totals_collection and adds the total of all calories in it.
  totalItems: function(){
    app.totalCalories = 0;
    app.totals_collection.each(function(item){
      app.totalCalories += item.attributes.nf_calories;
    });
    this.$el.html(this.template({totalCalories: app.totalCalories}));
    // console.log(totalCalories);
  },

  // clearTotals clears out the localStorage and then clears out the totals_collection
  clearTotals: function(e){
    var self = this;
    e.preventDefault();
    localStorage.clear();

    for(var i = (app.totals_collection.models.length - 1); i > -1; i--){
      self.deleteFoodItem(app.totals_collection.models[i]);
    }
  }
});