$(document).ready(function () {
    // Getting the inputs using jQuery
    var vName = $("#vName");
    var pName = $("#pName");
    var category = $("#category");
    var pDesc = $("#pDesc");

    // When user adds a new product run this
    $("#submits").on("click", function (event) {
        event.preventDefault();
        // Setting vendorData to the input values
        var vendorData = {
            vendorName: vName.val().trim(),
            productName: pName.val().trim(),
            category: category.val().trim(),
            description: pDesc.val().trim()
        }
        // Calling the addProdcut function with the paramaters
        // vendorName, productName, category, and description
        addProduct(vendorData.vendorName, vendorData.productName, vendorData.category, vendorData.description);
        // After addProduct is called the inputs are cleared
        vName.val("");
        pName.val("");
        category.val("");
        pDesc.val("");
    });
    // The addProduct function
    function addProduct(vendorName, productName, category, description) {
        // Post request that will hit the /api/products post request
        $.post("/api/products", {
            vendorName: vendorName,
            productName: productName,
            category: category,
            description: description
        }).then(function (data) {
            // Logging data to the console for giggles
            console.log(data);
            // Redirecting the user to the all-events page
            window.location.replace("/all-events");
        });
    }
});