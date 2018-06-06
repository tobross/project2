$(document).ready(function () {
    var num_searches = 0;
    var nextPage = 1;

    $.get("/api/events", function(data) {
        for(var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    });

    $("#nextEvents").on("click", function (event) {
        event.preventDefault();
        nextPage ++;

        loadResults();  
    }); 

    $("#previousEvents").on("click", function (event) {
        event.preventDefault();
        nextPage --;

        loadResults();  
    }); 

    function loadResults(){
        $("#recipeCard").empty();

        var recipeSearchInput = $("#dish-input").val();

        if ($("#ingredient-input").val())
            recipeSearchInput += "%20" + $("#ingredient-input").val();

        if ($("#cuisine-input").val())
            recipeSearchInput += "%20" + $("#cuisine-input").val();
        
        var recipeObject = {
            input1: $("#dish-input").val(),
            input2: $("#ingredient-input").val(),
            input3: $("#cuisine-input").val()
        }
        firebase.database().ref().push({
             recipeObject
        })
    };

});
