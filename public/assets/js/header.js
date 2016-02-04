$(document).ready(function () {
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        var scrollBottom = $(window).height();
	        if (scroll >= 120) {
	        	$("#navMark").addClass('fixedNav');
	        	$("#fixedHeaderExpander").addClass('expanded');
	        } else {
	        	$("#navMark").removeClass('fixedNav');
	        	$("#fixedHeaderExpander").removeClass('expanded');
	        }
	        if(scroll >= scrollBottom){
	        	//alert("scrollBottom");
	        }
	    });


});