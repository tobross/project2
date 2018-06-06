$(document).ready(function () {
    var nextPage = 1;

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
        $("#eventsCard").empty();

        var eventCategoryInput = $("#category").val();

        if ($("#category").val())
        eventCategoryInput += $("#category").val();
    };
});
