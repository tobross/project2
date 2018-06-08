$(document).ready(function () {
    var nextPage = 1;

    var eventCard;

    var appendEvent = function() {
        $(".eventList").append(eventCard);
    };
    var eventName = "";
    var location = "";
    var date = "";
    var description = "";


    function testing() {
        console.log("THIS IS THE TESTING FUNC");
        $.get("/api/events" ,function(data) {
            console.log("THIS IS DATA");
            for(var i = 0; i < data.length; i ++) {
                console.log(data[i]);
                eventCard = "<div class='card'>"+
                "<img class='eventimg' src='"+ data[i].image +"' alt='image'>"+
                "<h6 class='eventName'><b>"+ data[i].eventName +"</b></h6>"+
                "<p class='eventLoc'>Location: "+ data[i].location +"</p>"+
                "<p class='eventDate'>Date: "+ data[i].date +"</p>"+
                "<p class='eventDesc'>Description: "+ data[i].description +".</p>"+
            "</div>";
            
                     appendEvent();
            }
        });
    }
    testing();

//     $.get("/api/events", function(data) {
//         for(var i = 0; i < data.length; i++) {

//             var eventCard = "<div class='card'>"+
//     "<img class='eventimg' src='"+ db.event[i].image +"' alt='image'>"+
//     "<h6 class='eventName'><b>"+ db.event[i].name +"</b></h6>"+
//     "<p class='eventLoc'>Location: "+ db.event[i].location +"</p>"+
//     "<p class='eventDate'>Date: "+ db.event[i].date +"</p>"+
//     "<p class='eventDesc'>Description: "+ db.event[i].description +".</p>"+
// "</div>";

//          appendEvent();
//         }
//     });

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
