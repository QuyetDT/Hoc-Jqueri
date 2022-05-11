$(document).ready(function(){
    $("#clickMe").click(function(){
        $("img").fadeIn(5000);
        $("#picframe").slideToggle("slow");
    });
});
