$(document).ready(function () {
    // Getting the inputs using jQuery
    var eventTitle = $("#eventTitle");
    var eventDate = $("#eventDate");
    var eventLocation = $("#eventLocation");
    var eventCategory = $("#eventCategory");
    var eventImg = $("#eventImg");
    var eventDetails = $("#eventDetails");

    // When user adds a new event run this
    $(".button-primary").on("click", function (event) {
        event.preventDefault();
        // Setting eventData to the input values
        var eventData = {
            eventName: eventTitle.val().trim(),
            date: eventDate.val().trim(),
            location: eventLocation.val().trim(),
            category: eventCategory.val().trim(),
            description: eventDetails.val().trim()
        }
        // Calling the addEvent function with the paramaters
        // eventName, date, location, category, and description
        addEvent(eventData.eventName, eventData.date, eventData.location, eventData.category, eventData.description);
        // After addEvent is called the inputs are cleared
        eventTitle.val("");
        eventDate.val("");
        eventLocation.val("");
        eventCategory.val("");
        eventDetails.val("");
    });
    // The addEvent function
    function addEvent(eventName, date, location, category, description) {
        // Post request that will hit the /api/events post request
        $.post("/api/events", {
            eventName: eventName,
            date: date,
            location: location,
            category: category,
            description: description
        }).then(function (data) {
            // Logging data to the console for giggles
            console.log(data);
            // Redirecting the user to the all-events page
            window.location.replace("/all-events");
        }).catch(function (err) {
            // If an error occurs log it in the console
            console.log(err);
        });
    }
});