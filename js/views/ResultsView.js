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
    // Had to put in looking for the enter key.
    // Not sure why yet, but when a keypress was entered, prior to adding the if statement,
    // The console.log was always one character behind. 
    // if(event.which !== 13 || !this.$input.val().trim()){
    //   return;
    // }
    console.log(this.$input.val().trim());
  }
});