//helper functions
function frontResizeHandler(){
	$('#landing').height(window.innerHeight);
    $('#zooIntro').height(window.innerHeight);
};


//what to do on page load;
$(document).ready(function() {

	var landing = $('#landing');
	var zooIntro = $('#zooIntro');
	$('#landing').height(window.innerHeight);
    $('#zooIntro').height(window.innerHeight);
    window.dispatchEvent(new Event('resize'));
    $(window).trigger('resize');
    frontResizeHandler();
});

$(window).resize(function() {
    frontResizeHandler();
});

$(window).trigger('resize');