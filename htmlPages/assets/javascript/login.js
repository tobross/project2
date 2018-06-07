$(document).ready(function () {

    var emailInput = $("#loginName");
    var passwordInput = $("#loginPassword");

    emailInput.val("foo@bar.com");
    passwordInput.val("password");

    $("#submits").on("click", function (event) {
        event.preventDefault();

        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        }

        if (!userData.email || !userData.password) {
            return;
        }

        loginUser(userData.email, userData.password);

        emailInput.val("");
        passwordInput.val("");
    });

    function loginUser(email, password) {
        console.log("hello");
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data) {
            console.log(data);
            console.log("did this work");
            window.location.replace(data);
        });
    }

    // $("#navigation").on("change", function () {
    //     console.log("redirect func running");
    //     if (this.value === "events") {
    //         window.location = "event.html"
    //     } else if (this.value === "vendors") {
    //         window.location = "vendor.html"
    //     } else {
    //         window.location = "landing.html"
    //     }
    // });
});