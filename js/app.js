var app = app || {};

$(function() {
    // var results = [
    //     { title: 'Result1', url: 'www.google.com' },
    //     { title: 'Result5', url: 'www.google.com' },
    //     { title: 'Result4', url: 'www.google.com' },
    //     { title: 'Result3', url: 'www.google.com' },
    //     { title: 'Result2', url: 'www.google.com' }
    // ];

    new app.ResultsView();
    new app.DailyItemsView();
});