$(document).ready(function () {
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        var scrollBottom = $(window).height();//-($(window).height()-132);
	        
	 		//alert("scrolllly");
	        if (scroll >= 120) {
	        	$("#navMark").addClass('fixedNav');
	        	//alert(scrollBottom);
	            //$("header").addClass('smaller');
	            //$(".navBtn").addClass('smaller');
	            //$("#indexLink").addClass('indexLinkSmaller');
	            //alert("size change");
	            //alert("now");
	        } else {
	        	$("#navMark").removeClass('fixedNav');
	            //$("header").removeClass("smaller");
	            //$(".navBtn").removeClass('smaller');
	            //$("#indexLink").removeClass('indexLinkSmaller');
	        }
	        if(scroll >= scrollBottom){
	        	//alert("scrollBottom");
	        }
	    });
});