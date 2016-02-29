$(document).ready(function () {

		$(".metalBar").addClass('fixedLowerBar');
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        var scrollBottom = $(document).height()-$("footer").height();
	        if (scroll >= 120) {
	        	$("#navMark").addClass('fixedNav');
	        	$("#fixedHeaderExpander").addClass('expanded');
	        } else {
	        	$("#navMark").removeClass('fixedNav');
	        	$("#fixedHeaderExpander").removeClass('expanded');
	        }
	        if(scroll >= scrollBottom){
	        	alert("scrollBottom");
	        	$(".metalBar").removeClass('fixedLowerBar');
	        }
	    });
});