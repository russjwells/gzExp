$(document).ready(function () {
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        var scrollBottom = $(window).height();
	        if (scroll >= 120) {
	        	$("#navMark").addClass('fixedNav');
	        } else {
	        	$("#navMark").removeClass('fixedNav');
	        }
	        if(scroll >= scrollBottom){
	        	//alert("scrollBottom");
	        }
	    });


});