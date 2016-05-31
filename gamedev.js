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
  		$("#lol").show();
        $("#buildingfalling").hide();
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