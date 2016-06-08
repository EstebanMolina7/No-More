$( document ).ready(function() {
//here we hide all the building falling pictures using .hide();
$("#lol").hide();
$("#buildingfalling").hide();
var points=0;
$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $("#man").stop().animate({
            left: '-=75'
        }); //left arrow key
        points++;
  		$("#exploreBody").css("background-image", "url(http://i.telegraph.co.uk/multimedia/archive/01432/china_1432267c.jpg)")
         
  		alert("Correct! You have chosen the right side, can you get past the next building?")
        window.location.href="file:///Users/s210436/Google%20Drive/HKIS/7th%20Grade/Game%20design%20and%20coding/No-More/index.html";

		break;

    case 38:
        $("#man").stop().animate({
            top: '-=75'
        }); //up arrow key
        break;
    case 39:
        $("#man").stop().animate({
            left: '+=75'
        }); //right arrow key
        alert("You have chosen the wrong side!!, you are dead.")
        window.location.href="file:///Users/s210436/Google%20Drive/HKIS/7th%20Grade/Game%20design%20and%20coding/No-More/index.html";
        $("#man").hide();
        $(button).show()
        break;
    case 40:
        $("#man").stop().animate({
            top: '+=75'
        }); //bottom arrow key
        break;
    }
})//this is where the arrow key function ends

if (points==1) {
	$("#buildingfallen").show();
	$("#buildingfalling").hide();
}

else{
	//this can be empty
}



});//this is where the game ends DO NOT REMOVE