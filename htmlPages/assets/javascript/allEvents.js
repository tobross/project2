$(document).ready(function () {
    var nextPage = 1;

    var eventsGoHere = $(".eventList");
    var eventName;
    var eventLocation;
    var eventDate;
    var eventDescription;


    function buildEventCard() {
        eventsGoHere.empty();
        $.get("/api/events", function (data) {
            for (var i = 0; i < data.length; i++) {

                // Creating the rows that will be in the event card
                // Row One
                var rowOne = $("<div>");
                rowOne.addClass("row");
                // Row Two
                var rowTwo = $("<div>");
                rowTwo.addClass("row");
                // Row Three
                var rowThree = $("<div>");
                rowThree.addClass("row");
                // Row Four
                var rowFour = $("<div>");
                rowFour.addClass("row");

                // Creates the innards of the event card
                var cardInside = $("<div>");
                cardInside.addClass("row cardWrpper");

                // Creates the wrapper that will hold the description
                var descriptionWrapper = $("<div>");
                descriptionWrapper.addClass("descriptionWrapper");

                // Creates the event name div with text (data)
                var eventName = $("<div>");
                eventName.addClass("eventName");
                eventName.text(data[i].eventName);
                // Creates the event location div with text (data)
                var eventLocation = $("<div>");
                eventLocation.addClass("eventLocation");
                eventLocation.text(data[i].location);
                // Creates the event date div with text (data)
                var eventDate = $("<div>");
                eventDate.addClass("eventDate");
                eventDate.text(data[i].date);
                // Creates the event descriptoin div with text (data)
                var eventDescription = $("<div>");
                eventDescription.addClass("nine columns eventDescription");
                eventDescription.text(data[i].description);

                var sponsorButton = $("<button>");
                sponsorButton.addClass("three columns sponsor-button");
                sponsorButton.text("Sponsor");

                descriptionWrapper.append(eventDescription);

                rowOne.append(eventName);
                rowTwo.append(eventLocation);
                rowThree.append(eventDate);
                rowFour.append(descriptionWrapper);
                rowFour.append(sponsorButton);

                cardInside.prepend(rowOne);
                cardInside.append(rowTwo);
                cardInside.append(rowThree);
                
                cardInside.append(rowFour);

                eventsGoHere.append(cardInside);

            }
        });
    }
    buildEventCard();
});