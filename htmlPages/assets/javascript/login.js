$(document).ready(function () {

    // $(".button-primary").on("click", test);

    // function test(event) {
    //     event.preventDefault();
    //     var firstName = $("#firstName").val().trim();
    //     var lastName = $("#lastName").val().trim();
    //     var email = $("#exampleEmailInput").val().trim();
    //     var password = $("#password").val().trim();

    //     console.log(firstName);
    //     console.log(lastName);
    //     console.log(email);
    //     console.log(password);

    //     $.post("api/users", {
    //         username: firstName + lastName,
    //         password: password,
    //         email: email
    //     });
    // }

    $("#navigation").on("change", function () {
        console.log("redirect func running");
        if (this.value === "events") {
            window.location = "event.html"
        } else if (this.value === "vendors") {
            window.location = "vendor.html"
        } else {
            window.location = "landing.html"
        }
    });
});