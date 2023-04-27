$(document).on("ready",function(){
	//============= List Tables Heading =================
	$('#wpas-ticket-status,#wpas-ticket-title,#wpas-ticket-product').addClass('sort-alpha');
	$('#wpas-ticket-date').addClass('sort-numeric');
	$('.avatar').addClass('img-responsive');
	
	$( '#wpas_pwdshow_wrapper input[type="checkbox"]' ).change(function() {
	  	$( '#wpas_pwdshow_wrapper input[type="checkbox"]' ).prop( "checked", function( i, val ) {
        if(val == true){
			  $('#wpas_password').attr('type','text');
		  }else{
			  $('#wpas_password').attr('type','password');
		  }
		});
	});
		
	//============= Support Listing  ====================
	$('#wpas_ticketlist').DataTable({
		"dom": 'lCfrtip',
		"order": [],
		"colVis": {
			"buttonText": "Columns",
			"overlayFade": 0,
			"align": "right"
		},
		"language": {
			"lengthMenu": '_MENU_ records per page',
			"search": '<i class="fa fa-search"></i>',
			"paginate": {
				"previous": '<i class="fa fa-angle-left"></i>',
				"next": '<i class="fa fa-angle-right"></i>'
			}
		}
	});
	//============= Support Buttons Icons ===============
	$('.wpas-link-ticketlist').prepend('<span class="header_icon"><i class="fa fa-ticket" aria-hidden="true"></i></span>');
	$('.wpas-link-ticketnew').prepend('<span class="header_icon"><i class="fa fa-folder-open-o" aria-hidden="true"></i></span>');
	$('.wpas-link-logout').prepend('<span class="header_icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span>');					
	//============= Support Scripts =====================
	
		$("#wpas_product").after($("#wpas_product_wrapper label"));
		$("#wpas_product").addClass('form-control static dirty');
		$("#wpas_files_wrapper").find('label').remove();
		$('#wpas-new-ticket button[type="submit"]').addClass('login_button submit_ticket_button_margin');
	$( "#wpas_envato_license_wrapper" ).parent('div').after($('.wpas-modal-trigger'));
	$('.wpas-modal-trigger').attr('href','https://youtu.be/5RGqrtx8ed4').wrap( '<span class="knowyourlicense"></span>' );

	$('#wpas_form_login,#wpas_form_registration').find('input[type="text"],input[type="password"],input[type="email"]').each(function(){
		$(this).addClass('form-control');
		$(this).siblings('label').remove();
		$(this).after( "<label for='"+$(this).attr("id")+"'>"+$(this).attr('placeholder')+"</label>" );
		$(this).attr('placeholder','');
	});
	
	$('#wpas-new-ticket').find('input[type="text"],input[type="password"],input[type="email"]').each(function(){
		$(this).addClass('form-control');
		$(this).attr('placeholder',$(this).siblings('label').html());
		$(this).siblings('label').remove();
		
		$(this).after( "<label for='"+$(this).attr("id")+"'>"+$(this).attr('placeholder')+"</label>" );
		$(this).attr('placeholder','');
	});
		
	$('#wpas_form_login,#wpas_form_registration').find('button').each(function(){
		$(this).addClass('login_button');			
	});
		
	$( "input" ).focusout(function() {
		$( "input" ).each(function(){
		if($(this).val()!="") $(this).addClass('dirty');
		else $(this).removeClass('dirty');	
		});
	});
	$( "input" ).each(function(){
		if($(this).val()!="") $(this).addClass('dirty');
		else $(this).removeClass('dirty');	
	});
	
	$('#wpas-new-ticket').fadeIn();
	
	//============= Support Message Displays ====================  
	if($(".myticket_title").length){
		$(".myticket_title").after($('.wpas-alert-success , .wpas-alert-danger, .wpas-alert-warning'));
		$('.wpas-alert-success  , .wpas-alert-danger, .wpas-alert-warning').wrap( '<div class="col-md-12"> </div>' );
		$('.wpas-alert-success  , .wpas-alert-danger, .wpas-alert-warning').css('opacity','1').css('display','block');
	}
	else
	{
		$(".myticket_title").after($('.wpas-alert-success , .wpas-alert-danger, .wpas-alert-warning'));
		$('.wpas-alert-success  , .wpas-alert-danger, .wpas-alert-warning').wrap( '<div class="container"><div class="col-md-12"> </div></div>' );
		$('.wpas-alert-success  , .wpas-alert-danger, .wpas-alert-warning').css('opacity','1').css('display','block');
	}

	if (!$('.wpas-alert').parents('.container').length) {
		$('.wpas-alert-info').wrap( '<div class="container"><div class="col-md-12"> </div></div>' );
		$('.wpas-alert-info').css('opacity','1').css('display','block');	
	}


});