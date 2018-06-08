$(document).ready(function () {
    var nextPage = 1;

    var eventName = "";
    var location = "";
    var date = "";
    var description = "";

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
        $("#eventsCard").empty();

        var eventCategoryInput = $("#category").val();
        if ($("#category").val())
        eventCategoryInput += $("#category").val();
    };
});
