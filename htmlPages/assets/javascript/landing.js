$(document).ready(function () {
    // Tracks the route of the hostButton when user is not logged in
    $("#HostButton").on("click", function () {
        console.log("hostButtonCLicked");
        $.get("/api/route-getter/event", function(result) {
            console.log("result from api/rpute-getter/event");
            console.log(result);
            console.log("result from api/rpute-getter/event");
        });
    });
    // Tracks the route of the host event wrapper when user is not logged in
    $("#eventBox").on("click", function () {
        console.log("eventDivCLicked");
        $.get("/api/route-getter/event", function (result) {
            console.log("result from api/rpute-getter/event");
            console.log(result);
            console.log("result from api/rpute-getter/event");
        });
    });
    // Tracks the route of the BusinessButton when user is not logged in
    $("#BusinessButton").on("click", function () {
        console.log("businessButtonClicked");
        $.get("/api/route-getter/vendor", function (result) {
            console.log("result from api/rpute-getter/vendor");
            console.log(result);
            console.log("result from api/rpute-getter/vendor");
        });
    });
    // Tracks the route of the business vendor wrappper when user is not logged in
    $("#vendorBox").on("click", function () {
        console.log("vendorDivClicked");
        $.get("/api/route-getter/vendor", function (result) {
            console.log("result from api/rpute-getter/vendor");
            console.log(result);
            console.log("result from api/rpute-getter/vendor");
        });
    });
    // Tracks the route of the all-events button when user is not logged in
    $("#eventUrl").on("click", function () {
        console.log("navAllEventsButtonClicked");
        $.get("/api/route-getter/all-events", function (result) {
            console.log("result from api/rpute-getter/all-events");
            console.log(result);
            console.log("result from api/rpute-getter/all-events");
        });
    });
});