	/*services*/
	var txt_orig = $("#services h1").html();

	$("#grid li").bind("mouseenter", function () {

	    the_img = $(this).find("img");
	    the_txt = the_img.attr("alt");
	    $(this).css({
	        "z-index": 100
	    }).animate({
	        "width": "+=150",
	        "margin-left": "-=10",
	        "margin-top": "-=20"
	    }, 250);
	    $("#services h1").html(the_txt);

	}).bind("mouseleave", function () {

	    the_img = $(this).find("img");
	    the_txt = the_img.attr("alt");
	    $(this).css({
	        "z-index": 10
	    }).animate({
	        "width": "-=150",
	        "margin-left": "+=10",
	        "margin-top": "+=20"
	    }, 250);
	    $("#services h1").html(txt_orig);
	});


	$(document).ready(function () {
	    $(window).scroll(function () { // check if scroll event happened
	        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
	            $(".navbar-fixed-top").css("background-color", "rgb(34,29,28)"); // if yes, then change the color of class "navbar-fixed-top" to red rgb(227,222,214)
	        } else {
	            $(".navbar-fixed-top").css("background-color", "rgba(34,29,28,.3)"); // if not, change it back to transparent
	        }
	    });
	});