var app = app || {};

app.ResultsView = Backbone.View.extend({
  el: '#results',

  events: {
    'keyup #search': 'searchForFood'
  },

  initialize: function( testResults ){
    this.$input = this.$('#search');

    this.collection = new app.ResultList( testResults );
    this.render();

    // this.listenTo(this.collection, 'add', this.renderResult);
  },

  render: function(){
    this.collection.each(function(item){
      this.renderResult(item);
    }, this);
  },

  renderResult: function(item){
    var resultView = new app.ResultView({
      model: item
    });
    this.$el.append(resultView.render().el);
  },

  searchForFood: function(e){
    if(event.which !== 13 || !this.$input.val().trim()){
      return;
    }
    console.log(this.$input.val().trim());
    getNutritionixInfo(this.$input.val().trim());
  }
});

// 'https://api.nutritionix.com/v1_1/search/
// cheddar%20cheese?
// fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=2f93c877&appKey=856fd9dc7309f10e7d89e52e81dccf78'