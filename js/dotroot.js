	/*services*/
	var txt_orig = $("#services h2").html();

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