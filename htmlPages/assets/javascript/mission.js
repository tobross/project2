$(document).ready(function () {
    $(".toHide").hide();

    $("#techButton").click(function(){
         $("#p1").toggle();
    });

    $("#teamButton").click(function(){
         $("#p2").toggle();
    });
});
