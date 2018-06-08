$(document).ready(function() {
    $("#HostButton").on("click", function() {
        console.log("hostButtonCLicked");
        $.get("/api/route-getter/event", function(result) {
            console.log("result from api/rpute-getter/event");
            console.log(result);
            console.log("result from api/rpute-getter/event");
        });
    });
    $("#BusinessButton").on("click", function() {
        console.log("BusinessButtonClicked");
        $.get("/api/route-getter/vendor", function(result) {
            console.log("result from api/rpute-getter/vendor");
            console.log(result);
            console.log("result from api/rpute-getter/vendor");
        });
    });
});