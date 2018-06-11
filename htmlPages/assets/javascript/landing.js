$(document).ready(function () {
    $("#HostButton").on("click", function () {
        console.log("hostButtonCLicked");
        $.get("/api/route-getter/event", function (result) {
            console.log("result from api/rpute-getter/event");
            console.log(result);
            console.log("result from api/rpute-getter/event");
        });
    });
    $("#eventBox").on("click", function () {
        console.log("eventDivCLicked");
        $.get("/api/route-getter/event", function (result) {
            console.log("result from api/rpute-getter/event");
            console.log(result);
            console.log("result from api/rpute-getter/event");
        });
    });
    $("#BusinessButton").on("click", function () {
        console.log("businessButtonClicked");
        $.get("/api/route-getter/vendor", function (result) {
            console.log("result from api/rpute-getter/vendor");
            console.log(result);
            console.log("result from api/rpute-getter/vendor");
        });
    });
    $("#vendorBox").on("click", function () {
        console.log("vendorDivClicked");
        $.get("/api/route-getter/vendor", function (result) {
            console.log("result from api/rpute-getter/vendor");
            console.log(result);
            console.log("result from api/rpute-getter/vendor");
        });
    });
    $("#eventUrl").on("click", function () {
        console.log("navAllEventsButtonClicked");
        $.get("/api/route-getter/all-events", function (result) {
            console.log("result from api/rpute-getter/all-events");
            console.log(result);
            console.log("result from api/rpute-getter/all-events");
        });
    });
});