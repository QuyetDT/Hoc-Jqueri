$(document).ready(function(){
    var headclick = 0, eyesclick = 0,
    noseclick = 0, mouthclick = 0;

        lightning_one();
        lightning_two();
        lightning_three();

        $("#head").click(function(){
            if (headclick<9){
                $("#head").animate({left:"-=367px"},500);
                headclick++;
            } else {
                $("#head").animate({left:"0px"},500);
                headclick =0;
            }
        });

        $("#eyes").click(function(){
            if (eyesclick<9){
                $("#eyes").animate({left:"-=367px"},500);
                eyesclick++;
            } else {
                $("#eyes").animate({left:"0px"},500);
                eyesclick =0;
            }
        });

        $("#nose").click(function(){
            if (noseclick<9){
                $("#nose").animate({left:"-=367px"},500);
                noseclick++;
            } else {
                $("#nose").animate({left:"0px"},500);
                noseclick =0;
            }
        });

        $("#mouth").click(function(){
            if (mouthclick<9){
                $("#mouth").animate({left:"-=367px"},500);
                mouthclick++;
            } else {
                $("#mouth").animate({left:"0px"},500);
                mouthclick =0;
            }
        });
});

function lightning_one() {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout("lightning_one()", 4000);
}

function lightning_two() {
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_two()",5000);
}

function lightning_three() {
    $("#container #lightning3").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_three()",5000);
}