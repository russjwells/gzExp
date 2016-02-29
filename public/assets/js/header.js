$(document).ready(function () {
		
		
		$(".metalBar").addClass('fixedLowerBar');
	    $(window).scroll(function() {
	    	var footer = $('footer');
	    	var footerPosition = footer.offset().top;
			//var footerPosition = document.getElementById('footer').offsetHeight;
	        var scroll = $(window).scrollTop();
	        var bottomEdge = scroll + window.innerHeight;
	        var scrollBottom = $(document).height()-$("footer").height();
	        if (scroll >= 120) {
	        	$("#navMark").addClass('fixedNav');
	        	$("#fixedHeaderExpander").addClass('expanded');
	        } else {
	        	$("#navMark").removeClass('fixedNav');
	        	$("#fixedHeaderExpander").removeClass('expanded');
	        }
	        if(bottomEdge >= footerPosition+60){
	        	$(".metalBar").addClass('metalBarUnstuck');
	        }else{
	        	$(".metalBar").removeClass('metalBarUnstuck');
	        }
	        console.log("Scroll: "+ scroll+", Bottom:, "+ bottomEdge + ", footerStart: "+ footerPosition);

	    });
});