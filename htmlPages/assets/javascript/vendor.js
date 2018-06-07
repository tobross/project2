$(document).ready(function() {

    var vName = $("#vName");
    var pName = $("#pName");
    var category = $("#category");
    var pDesc = $("#pDesc");

    $("#submits").on("click", function(event) {
        event.preventDefault();

        addProduct(pName, category, pDesc);
    });

    function addProduct(pName, category, pDesc) {

        $.post("/api/products", {
            productName: pName.val().trim(),
            category: category.val().trim(),
            description: pDesc.val().trim()
        }).then(function(data) {
            console.log(data);
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