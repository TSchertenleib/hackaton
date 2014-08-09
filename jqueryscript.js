$(document).ready(function() {
	$('#navigation1').on('click', '#musik', function() {
	$(this).closest('#navigation1').find('.unterliste').slideDown();
	});
});