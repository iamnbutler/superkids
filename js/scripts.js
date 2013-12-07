// Load scripts after page loads
$(document).ready(function(){
	// Localscroll the nav
	$.localScroll();

	$('.toc a').click(function(){
		$('.toc').removeClass('open');
		return false;
	});

	$('.toc-target').click(function(){
		$(this).parent().toggleClass('open');
		return false;
	});
	$('#panel-4-jobs').waypoint(function(down) {
	  $('.jobs-infographic').addClass('active');
	}, { offset: '60%' });
	$('#panel-4-salary').waypoint(function(down) {
	  $('.salary-infographic').addClass('active');
	}, { offset: '60%' });
	$('#panel-4-gender').waypoint(function(down) {
	  $('.gender-infographic').addClass('active');
	}, { offset: '60%' });
	$('#theprocess').waypoint(function(down) {
	  $('.steps').addClass('active');
	}, { offset: '20%' });
});