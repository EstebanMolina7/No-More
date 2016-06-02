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
        $("#exploreBody").css("background-image", "url(data:image/png;base64,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XM+sOFk74xhfNBHEk8noZcyGV3qdb+gXW6nFIB0sRUGvOgm2HhkcKj9tHxDKB+qnoP1nQ8fYmB4kNsNqGJbEjn5WdPTT8U+teUDrz4Z6f+AOkV0tWz/LjCvnyiiuKK23KadNQLquJGDfRUAJppNP1DuWdgm8kSRPc6cUci9/fCf698tqmPh+6Iyugmz38ly8PRe9tgB8h53SP37+05f3f37/+7vk/ft//P1vPyemMbqKsr+++/JFnqkKP3/+QKPgJPcJpd1fP366ePPm4j759M+fxai4Ljb5+tOni4uPH5tlH7CykyTwkAi2iDz5mGhF+W01neIoAIHxe5/ttBM88bLJzNvLFKcAcHmikRCMvuz1jjQ973SHGDx2E+0vL1sD8F0IXPbADe4VeB3quq86u3FetOgAov1RgATu3eTb6mLd/hasOST823MmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAINAtNXT8DutvS3y79tsUzL1D5w09afb/+mRbbceuVxwLSqUdB/bmOeRRpx4Mx6lSIbruPAaxYmwASYwP8BfI771sLBqL4AAAAASUVORK5CYII=)")
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
}cc



});//this is where the game ends DO NOT REMOVE