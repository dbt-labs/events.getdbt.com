// ------------------------------------ CLASSES ------------------------------------

// adds specialty classes to body
$(document).on('ready',function(){ $('html').addClass('ready'); });
$(window).on('load',function(){ $('html').addClass('loaded'); });
if ( 'ontouchstart' in window ) { $('html').addClass('touch'); } else { $('html').addClass('click'); }
function is_touch(){ return ( 'ontouchstart' in window ); }

// ------------------------------------ BACKGROUNDS ------------------------------------

// background images
$(document).ready(function(){ $('[data-bg]').each(function(){ var el = $(this), bg = $(this).data('bg'); if ( bg ) { var timer = setTimeout(function(){ el.css('background-image','url('+bg+')'); },1); } }); });

// ------------------------------------ EVENTS ------------------------------------

(function(){

	var date = new Date;
	var currentdate = Number(date.toISOString().split('T')[0].replace(/-/g,''));
	$('.event').each(function(){
		var eventdate = Number($(this).data('event-date'));
		if ( eventdate >= currentdate ) {
			$(this).prependTo('#upcomingevents');
		} else {
			$(this).appendTo('#pastevents');
		}
	});

	function sort_future(a, b){ return ($(b).data('event-date')) < ($(a).data('event-date')) ? 1 : -1; }
	function sort_past(a, b){ return ($(b).data('event-date')) > ($(a).data('event-date')) ? 1 : -1; }
	$("#upcomingevents .event").sort(sort_future).appendTo('#upcomingevents');
	$("#pastevents .event").sort(sort_past).appendTo('#pastevents');

})();