var app = app || {};

app.ResultsView = Backbone.View.extend({
  el: '#results',

  events: {
    'keyup #search': 'searchForFood'
  },

  initialize: function(){
    this.$input = this.$('#search');

    // Originally app.collection was referred to as this.collection.
    // to add items to a collection, I had to change this.collection to app.collection, so that the collection
    // was accessible across the whole app.
    // I tried to create a global self variable, and then set it to 'this' context within the initialize
    // function.  However, that did not work.  Attaching the collection to the app variable fixed the issue.
    // Looke at SO, and some blog articles about rendering and adding to collections and did not find a better way.
    app.collection = new app.ResultList();
    // this.render();

    this.listenTo(app.collection, 'add', this.renderResult);
  },

  render: function(){
    app.collection.each(function(item){
      this.renderResult(item);
    }, this);
  },

  renderResult: function(item){
    // console.log(item);
    var resultView = new app.ResultView({
      model: item
    });
    this.$el.append(resultView.render().el);
  },

  searchForFood: function(e){
    // Got this bit of code (lines 37 - 39) from the Backbone TODO MVC example.
    // Originally, I thought I would just let a search fire off everytime the user pressed the key,
    // However, I thought the APP probably would not update fast enough, and it would be best
    // to let the user notify the APP when the search term was correctly entered.
    if(event.which !== 13 || !this.$input.val().trim()){
      return;
    }

    getNutritionixInfo(this.$input.val().trim()).done(function(data){
      var response = data.hits;
      var self = this;
      // console.log(response);
      for(var i=0; i < response.length; i++){
        console.log(response[i].fields.item_name);
        app.collection.add(new app.Result({title: response[i].fields.item_name}));
      }
    });
  }
});