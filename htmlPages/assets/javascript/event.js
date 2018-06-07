$(document).ready(function() {

    var eventTitle = $("#eventTitle");
    var eventDate = $("#eventDate");
    var eventLocation = $("#eventLocation");
    var eventCategory = $("#eventCategory");
    var eventImg = $("#eventImg");
    var eventDetails = $("#eventDetails");

    $(".button-primary").on("click", function(event) {
        event.preventDefault();
        console.log(eventTitle.val().trim());
        console.log(eventDate.val().trim());
        console.log(eventLocation.val().trim());
        // console.log(eventCategory.val().trim());
        // console.log(eventImg);
        console.log(eventDetails.val().trim());

        addEvent(eventTitle, eventDate, eventLocation, eventDetails);

        // console.log(req.user.id);

    });

    function addEvent(eventTitle, eventDate, eventLocation, eventDetails) {
        $.post("/api/events", {
            eventName: eventTitle.val().trim(),
            date: eventDate.val().trim(),
            location: eventLocation.val().trim(),
            description: eventDetails.val().trim()
        }).then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });
    }

    $("#navigation").on("change", function() {
        console.log("redirect func running");
      if (this.value === "events") {
          window.location = "event.html"
      }
     else if (this.value === "vendors") {
         window.location = "vendor.html"
     }
     else {
         window.location = "landing.html"
     }
    });
});