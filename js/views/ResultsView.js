var app = app || {};

app.ResultsView = Backbone.View.extend({
  el: '#results',

  events: {
    'keyup #search': 'searchForFood',
    'click li': 'addToTotal'
  },

  initialize: function(){
    this.$input = this.$('#search');

    // Originally app.collection was referred to as this.collection.
    // to add items to a collection, I had to change this.collection to app.collection, so that the collection
    // was accessible across the whole app.
    // I tried to create a global self variable, and then set it to 'this' context within the initialize
    // function.  However, that did not work.  Attaching the collection to the app variable fixed the issue.
    // Looked at SO, and some blog articles about rendering and adding to collections and did not find a better way.
    app.collection = new app.ResultList();
    // this.render();

    this.listenTo(app.collection, 'add', this.renderResult);
    //this.listenTo(app.collecton, 'remove', this.deleteResult);
  },

  render: function(){
    app.collection.each(function(item){
      this.renderResult(item);
    }, this);
  },

  renderResult: function(item){
    var resultView = new app.ResultView({
      model: item
    });
    this.$el.append(resultView.render().el);
  },

  deleteResult: function(child){
    // Not sure on this one.  When I create the search results, there is a result view created and added
    // to the collection and all the results are added to the view.
    // The resultView variable is no longer accessible once the renderResult function complete.
    // TODO: Maybe create an array, and push each resultView to the array, and then I can work with them as needed.
    // However, lots to do to finish this project, so I am going to move on for now.
    var deleteItem = new app.ResultView({
      model: child
    });
    deleteItem.destroy();
  },

  searchForFood: function(e){
    var self = this;
    // Got this bit of code (lines 37 - 39) from the Backbone TODO MVC example.
    // Originally, I thought I would just let a search fire off everytime the user pressed the key,
    // However, I thought the APP probably would not update fast enough, and it would be best
    // to let the user notify the APP when the search term was correctly entered.
    if(event.which !== 13 || !this.$input.val().trim()){
      return;
    }

    // For loop goes through the existing collection and then sends off a call to deleteResult.
    // This allows the APP to delete old search results and add new search results each time the user
    // starts searching for a new food item. 
    for(var i = (app.collection.models.length - 1); i > -1; i--){
      self.deleteResult(app.collection.models[i]);
    }

    getNutritionixInfo(this.$input.val().trim()).done(function(data){
      var response = data.hits;
      var self = this;
      // console.log(response);
      for(var i=0; i < response.length; i++){
        // console.log(response[i].fields.item_name);
        app.collection.add(new app.Result({
          item_id: response[i].fields.item_id,
          item_name: response[i].fields.item_name,
          brand_name: response[i].fields.brand_name,
          nf_calories: response[i].fields.nf_calories
        }));
      }
      // console.log(app.collection.models);
    });
  },

  addToTotal: function(e){
    e.preventDefault();
    console.log(e);
  }

});