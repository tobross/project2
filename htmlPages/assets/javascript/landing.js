$(document).ready(function() {
    var vendor = $(".vendor");
    var event = $(".event");

    vendor.hover(
        function() {
            $(this).addClass("hoverV");
        }, function() {
            $(this).removeClass("hoverV");
        }
    );
    event.hover(
        function() {
            $(this).addClass("hoverE");
        }, function() {
            $(this).removeClass("hoverE");
        }
    );
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