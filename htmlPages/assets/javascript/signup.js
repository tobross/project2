$(document).ready(function () {

    $(".button-primary").on("click", function (event) {
        event.preventDefault();
        if (validateForm() === true) {

                var firstName = $("#firstName").val().trim();
                var lastName = $("#lastName").val().trim();
                var email = $("#emailInput").val().trim();
                var password = $("#password").val().trim();

                var username = firstName + " " + lastName;

                console.log(firstName);
                console.log(lastName);
                console.log(username);
                console.log(email);
                console.log(password);

                addUser(username, email, password);

        } else {
            console.log("failed validation");
        }

    });

    function addUser(username, email, password) {
        $.post("/api/users", {
            username: username,
            email: email,
            password: password
        }).then(function(data) {
            console.log(data)
        });
    }

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
    //     },  );
    // }

    function validateForm() {

        var fname = $("#firstName").val().trim();
        var lname = $("#lastName").val().trim();
        var email = $("#emailInput").val().trim();
        var emailConfirm = $("#confirmSignupEmail").val().trim();
        var password = $("#password").val().trim();
        var passwordConfirm = $("#passwordConf").val().trim();

        if (fname == "") {
            window.alert("First Name cannot be empty.");
                $("#firstName").css("border", "red 4px solid");
        
            return false;
        }
        if (lname == "") {
            window.alert("Last Name cannot be empty.");
            $("#lastName").css("border", "red 4px solid");
            return false;
        }
        if (email == "") {
            window.alert("E-mail cannot be empty.");
            $("#emailInput").css("border", "red 4px solid");
            return false;
        }
        if (email.indexOf("@", 0) < 0) {
            window.alert("Please enter a vallid e-mail address.");
            $("#emailInput").css("border", "red 4px solid");
            return false;
        }
        if (email.indexOf(".", 0) < 0) {
            window.alert("Please enter a valid e-mail address.");
            $("#emailInput").css("border", "red 4px solid");
            return false;
        }
        if (emailConfirm == "") {
            window.alert("Cannow be empty.");
            $("#confirmSignupEmail").css("border", "red 4px solid");
            return false;
        }
        if (emailConfirm.indexOf("@", 0) < 0) {
            window.alert("Please enter a vallid e-mail address.");
            $("#confirmSignupEmail").css("border", "red 4px solid");
            return false;
        }
        if (emailConfirm.indexOf(".", 0) < 0) {
            window.alert("Please enter a valid e-mail address.");
            $("#confirmSignupEmail").css("border", "red 4px solid");
            return false;
        }
        if (email !== emailConfirm) {
            window.alert("E-mails do not match. Please check your input.");
            $("#confirmSignupEmail").css("border", "red 4px solid");
            return false;
        }
        if (password == "") {
            window.alert("Cannot be empty.");
            $("#password").css("border", "red 4px solid");
            return false;
        }
        if (password.length < 8) {
            window.alert("Password must be at least 8 characters.")
            $("#password").css("border", "red 4px solid");
            return false;
        }
        if (password.length > 16) {
            window.alert("Password cannot be longer than 16 characters.")
            $("#password").css("border", "red 4px solid");
            return false;
        }
        if (passwordConfirm == "") {
            window.alert("Cannot be empty.");
            $("#passwordConf").css("border", "red 4px solid");
            return false;
        }
        if (passwordConfirm.length < 8) {
            window.alert("Password must be at least 8 characters.")
            $("#passwordConf").css("border", "red 4px solid");
            return false;
        }
        if (passwordConfirm.length > 16) {
            window.alert("Password cannot be longer than 16 characters.")
            $("#passwordConf").css("border", "red 4px solid");
            return false;
        }
        if (password !== passwordConfirm) {
            window.alert("Passwords do not match. Please check your input.");
            $("#passwordConf").css("border", "red 4px solid");
            return false;
        }
        return true;
    };

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