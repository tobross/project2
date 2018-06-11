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

        validateLoginForm(userData.email, userData.password);

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

    $("#loginName").on("input", function(){
        $(this).removeClass("is-danger");
        $("#loginNameHelp").hide()
    });
    $("#loginPassword").on("input", function(){
        $(this).removeClass("is-danger");
        $("#loginPasswordHelp").hide()
    });
});


function validateLoginForm(username, password) {

    var username = $("#loginName").val().trim();
    var password = $("#loginPassword").val().trim();
    var isValidForm = true;
   
    if (username == "") {
        $("#loginName").addClass("is-danger");
        $("#loginNameHelp").show();
        isValidForm = false;
    }
    if (!password) {
        $("#loginPassword").addClass("is-danger");
        $("#loginPasswordHelp").text("Password cannot be empty.").show();
        isValidForm = false;
    }
    else if (password.length < 8) {
        $("#loginPassword").addClass("is-danger");
        $("#loginPasswordHelp").text("Password must be at least 8 characters.").show();
        isValidForm = false;
    }
    else if (password.length > 16) {
        $("#loginPassword").addClass("is-danger");
        $("#loginPasswordHelp").text("Password cannot be longer than 16 characters.").show();
        isValidForm = false;
    }
    return isValidForm;
};
