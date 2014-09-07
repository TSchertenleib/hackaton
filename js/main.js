$(document).ready(function ()	{
	
	$('h2').css('font-size', '40px');


    $('.unterliste').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });

	$('.box').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
    
    $('.box1').hover(function() {
	    $('#navigation1').addClass('active');
    }, function() {
        $('#navigation1').removeClass('active');
    });
    
    $('.box2').hover(function() {
	    $('#navigation2').addClass('active');
    }, function() {
        $('#navigation2').removeClass('active');
    });

});

