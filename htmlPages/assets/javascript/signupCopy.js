$(document).ready(function () {
    //Getting the inputs using jQuery
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var email = $("#emailInput");
    var password = $("#password");
    var emailConfirm = $("#confirmSignupEmail");
    var passwordConfirm = $("#passwordConf");

    var username = firstName + " " + lastName;

    //After the user fills out the form, run this
    $(".button-primary").on("click", function (event) {
        event.preventDefault();
        //Setting signupData to the input values
        var signupData = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            email: email.val().trim(),
            password: password.val().trim(),
            emailConfirm: emailConfirm.val().trim(),
            passwordConfirm: passwordConfirm.val().trim()
        }

        //Client Input Validation 
       if (validateForm(signupData.firstName, signupData.lastName,signupData.email, signupData.password, signupData.emailConfirm, signupData.passwordConfirm)) {

        var username = signupData.firstName + " " + signupData.lastName;

        console.log(firstName);
        console.log(lastName);
        console.log(username);
        console.log(email);
        console.log(password);
        
        //Calling the addUser function with the parameters username, email, password
        addUser(username, signupData.email, signupData.password);
        } 
        else {
            console.log("failed validation");
        };
       
    });

    //addUser function
    function addUser(username, email, password) {
        $.post("/api/users", {
            username: username,
            email: email,
            password: password
        }).then(function(data) {
            console.log("Logging user in");
            $.post("/api/login", {
                email: email,
                password: password
            }).then(function(data) {
                console.log(data);
                console.log("did this work");
                window.location.replace(data);
            });
        });
    };

    $("#firstName").on("input", function(){
        $(this).removeClass("is-danger");
        $("#firstNameHelp").hide()
    });
    $("#lastName").on("input", function(){
        $(this).removeClass("is-danger");
        $("#lastNameHelp").hide()
    });
    $("#emailInput").on("input", function(){
        $(this).removeClass("is-danger");
        $("#emailInputHelp").hide()
    });
    $("#password").on("input", function(){
        $(this).removeClass("is-danger");
        $("#passwordHelp").hide()
    });
    $("#confirmSignupEmail").on("input", function(){
        $(this).removeClass("is-danger");
        $("#confirmSignupEmailHelp").hide()
    });
    $("#passwordConf").on("input", function(){
        $(this).removeClass("is-danger");
        $("#passwordConfHelp").hide()
    });

    //Client Input Validation function
    function validateForm(firstName, lastName, email, password, emailConfirm, passwordConfirm) {

        var isValidForm = true;

        if (firstName == "") {
            $("#firstName").addClass("is-danger");
            $("#firstNameHelp").show();
            isValidForm = false;
        }
        if (lastName == "") {
            $("#lastName").addClass("is-danger");
            $("#lastNameHelp").show();
            isValidForm = false;
        }
        if (email == "") {
            $("#emailInput").addClass("is-danger");
            $("#emailInputHelp").show();
            isValidForm = false;
        }
        if (email.indexOf("@", 0) < 0) {
            $("#emailInput").addClass("is-danger");
            $("#emailInputHelp").text("Please enter a vallid e-mail address.").show();
            isValidForm = false;
        }
 
        if (email.indexOf(".", 0) < 0) {
            $("#emailInput").addClass("is-danger");
            $("#emailInputHelp").text("Please enter a vallid e-mail address.").show();
            isValidForm = false;
        }
        if (emailConfirm == "") {
            $("#confirmSignupEmail").addClass("is-danger");
            $("#confirmSignupEmailHelp").show();
            isValidForm = false;
        }
        if (emailConfirm.indexOf("@", 0) < 0) {
            $("#confirmSignupEmail").addClass("is-danger");
            $("#confirmSignupEmailHelp").text("Please enter a vallid e-mail address.").show();
            isValidForm = false;
        }
        if (emailConfirm.indexOf(".", 0) < 0) {
            $("#confirmSignupEmail").addClass("is-danger");
            $("#confirmSignupEmailHelp").text("Please enter a vallid e-mail address.").show();
            isValidForm = false;
        }
        if (email !== emailConfirm) {
            $("#confirmSignupEmail").addClass("is-danger");
            $("#confirmSignupEmailHelp").text("E-mails do not match. Please check your input.").show();
            isValidForm = false;
        }
        if (password == "") {
            $("#password").addClass("is-danger");
            $("#passwordHelp").show();
            isValidForm = false;
        }
        if (password.length < 8) {
            $("#password").addClass("is-danger");
            $("#passwordHelp").text("Password must be at least 8 characters.").show();
            isValidForm = false;
        }
        if (password.length > 16) {
            $("#password").addClass("is-danger");
            $("#passwordHelp").text("Password cannot be longer than 16 characters.").show();
            isValidForm = false;
        }
        if (passwordConfirm == "") {
            $("#passwordConf").addClass("is-danger");
            $("#passwordConfHelp").show();
            isValidForm = false;
        }
        if (passwordConfirm.length < 8) {
            $("#passwordConf").addClass("is-danger");
            $("#passwordConfHelp").text("Password must be at least 8 characters.").show();
            isValidForm = false;
        }
        if (passwordConfirm.length > 16) {
            $("#passwordConf").addClass("is-danger");
            $("#passwordConfHelp").text("Password cannot be longer than 16 characters.").show();
            isValidForm = false;
        }
        if (password !== passwordConfirm) {
            $("#passwordConf").addClass("is-danger");
            $("#passwordConfHelp").text("Passwords do not match. Please check your input.").show();
            isValidForm = false;
        }
        return isValidForm;
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