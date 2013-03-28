$(document).ready(function() {

	$('#headright').click(function() {
		document.location = "mailto:sf.ofe@sfgov.org";
	});
	
	$("#mainouter #foot a.signup").fancybox({
		'overlayShow'		: false,
		'showCloseButton'	: false,
		'width'				: 666,
		'height'			: 241,
		'padding'			: 0,
		'autoScale'			: false,
		'autoDimensions'	: false,
	});	
	$("#mainouter #foot a.access").fancybox({
		'overlayShow'		: false,
		'showCloseButton'	: false,
		'width'				: 750,
		'height'			: 454,
		'padding'			: 0,
		'autoScale'			: false,
		'autoDimensions'	: false
	});
	$("#mainouter #foot a.privacy").fancybox({
		'overlayShow'		: false,
		'showCloseButton'	: false,
		'width'				: 750,
		'height'			: 880,
		'padding'			: 0,
		'autoScale'			: false,
		'autoDimensions'	: false
	});
	$("a.calendar").fancybox({
		'overlayShow'		: false,
		'showCloseButton'	: false,
		'width'				: 810,
		'height'			: 650,
		'padding'			: 0,
		'autoScale'			: false,
		'autoDimensions'	: false
	});

	// set the background colors of the form rows alternating colors
	$('tr:odd').css({backgroundColor: '#f5f5f5'});
	$('tr:even').css({backgroundColor: '#f1f4f7'});
	
	// remove the border from radio buttons and checkboxes in IE
	$("form input:radio").css({border: '0px'});
	$("form input:checkbox").css({border: '0px'});
	
	$("#mainouter4 #content4 form div").filter(':has(:checkbox:selected)').end().click(function(event){
		if (event.target.type !== 'checkbox')			// don't toggle the checkbox if they clicked the actual checkbox
		{
			//if ( $(this).find("input:checkbox") )		// is there a checkbox in this div?
			//{
				if ( !$(this).find("input:checkbox").attr("checked") )
				{
					$(this).find("input:checkbox").attr("checked",true);
				}else{
					$(this).find("input:checkbox").attr("checked",false);
				}
			//}
		}
      });






      $('#mainouter4 #content4 form div, #mainouter4 #content4 form span').filter(':has(:radio:selected)').end().click(function(event)
          {
              //if the user didn't click on the checkbox itself, check it
                   if (event.target.type !== 'radio')
                   {
         	          $(':radio', this).trigger('click');
                   }
              $(':radio, tr').removeClass('selected');
              $(this).toggleClass('selected');
          });
	

});	// END QUERY READY FUNCTION


/*  REMOVE THIS - JUST FOR DEBUGGING  */
function print_r(theObj){
  var stmp = "";
  if(theObj.constructor == Array ||
     theObj.constructor == Object){
    stmp += "<ul>";
    for(var p in theObj){
      if(theObj[p].constructor == Array||
         theObj[p].constructor == Object){
			stmp += "<li>["+p+"] => "+typeof(theObj)+"</li>";
        	stmp += "<ul>";
        	stmp += print_r(theObj[p]);
        	stmp += "</ul>";
      } else {
			stmp += "<li>["+p+"] => "+theObj[p]+"</li>";
      }
    }
    stmp += "</ul>";
  }
  return stmp;
}