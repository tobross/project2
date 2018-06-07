$(document).ready(function () {

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
        console.log(eventCategory.val().trim());
        console.log(eventImg);
        console.log(eventDetails.val().trim());

    });

    $("#navigation").on("change", function() {
        console.log("redirect func running");
        if (this.value === "events") {
            if (userID) {
                window.location = "event.html"
            } else {
                window.location = "login.html"
            }
        } else if (this.value === "vendors") {
            if (userID) {
                window.location = "vendor.html"
            } else {
                window.location = "login.html"
            }
        } else if (this.value === "home") {
            if (userID) {
                window.location = "landing.html"
            } else {
                window.location = "login.html"
            }
        }
    });
});