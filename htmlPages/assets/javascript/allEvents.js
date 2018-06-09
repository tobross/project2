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

                var rowFive = $("<div>");
                rowFive.addClass("row");

                var rowSix = $("<div>");
                rowSix.addClass("row");

                var rowSeven = $("<div>");
                rowSeven.addClass("row");

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
                sponsorButton.attr("id", "sponsor-button");
                sponsorButton.text("Sponsor");

                descriptionWrapper.append(eventDescription);

                var sponsorArea = $("<div>");
                sponsorArea.addClass("row sopnsor-wrapper");

                var vendorNameInput = $("<input>");
                vendorNameInput.addClass("six columns");
                vendorNameInput.attr("id", "vendor-name-input");
                vendorNameInput.attr("type", "text");

                var productNameInput = $("<input>");
                vendorNameInput.addClass("six columns");
                vendorNameInput.attr("id", "product-name-input");
                vendorNameInput.attr("type", "text");

                var description = $("<textarea>");
                description.attr("id", "vendor-description");

                var sponsorEventBtn = $("<button>");
                sponsorEventBtn.attr("id", "sponsor-event-btn");
                sponsorEventBtn.text("Sponsor Event")


                rowOne.append(eventName);
                rowTwo.append(eventLocation);
                rowThree.append(eventDate);
                rowFour.append(descriptionWrapper);
                rowFour.append(sponsorButton);

                cardInside.prepend(rowOne);
                cardInside.append(rowTwo);
                cardInside.append(rowThree);
                
                cardInside.append(rowFour);

                rowFive.append(vendorNameInput);
                rowFive.append(productNameInput);
                rowSix.append(description);
                rowSeven.append(sponsorEventBtn);

                sponsorArea.append(rowFive);
                sponsorArea.append(rowSix);
                sponsorArea.append(rowSeven);

                eventsGoHere.append(cardInside);
                eventsGoHere.append(sponsorArea.hide());

                $("#sponsor-button").on("click", function(event) {
                    event.preventDefault();
                    console.log("click");
                    sponsorArea.show();
                    sponsorButton.hide();
                });

            }
        });
    }
    buildEventCard();
});