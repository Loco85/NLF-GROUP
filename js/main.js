$(document).ready(function() {

	/*YOUTUBE VIDEO PLAYER*/ 
    $('.header-section__video-carousel').owlCarousel({
    	loop: true,
    	items: 1,
    	nav: true,
    	dots: false,
    	slideBy: 1,
    	navText: ["<img src='./img/arrow-grey-left.png'>","<img src='./img/arrow-grey-right.png'>"]
    });

    $('.header-section__video-play').on('click', function(e) {
    	e.preventDefault();
    	var play_btn = $(this);

    	var wrapper = play_btn.closest('.embed-responsive');
    	videoPlay(wrapper);
    });

    function videoPlay(wrapper) {
	  var iframe = wrapper.find('.embed-responsive-item');
	  var play_btn = wrapper.find('.header-section__video-play');
	  var poster = wrapper.find('.header-section__poster');
	  // Берем ссылку видео из data
	  var src = iframe.data('src');
	  // скрываем постер и кнонку play
	  play_btn.addClass('hide');
	  poster.addClass('hide')
	  // подставляем в src параметр из data
	  iframe.attr('src',src);
	}

	$('.owl-nav').click(function() {
		 $('.header-section__poster').removeClass('hide');
		 $('.header-section__video-play').removeClass('hide');
		 $('.embed-responsive-item').attr('src','');
	});
	/*YOUTUBE VIDEO PLAYER*/ 

	 /*COLLAPSE LINK TEXT CHANGE*/
       $('a.descriptionDetails').click(function() {
            if($(this).attr('aria-expanded') == 'false') {
               $(this).text('Закрыть');
            }
            else {
               $(this).text('Подробнее');
            }
       });
      /*COLLAPSE LINK TEXT CHANGE*/


	/*CALCULATOR*/

	var sum_debt = 0;
	var sum_fines = 0;
	var sum_surchange = 0;
	var solvency = 0;
	$('#sum_debt').slider({
		 formatter: function(value) {
		 	 $('#sum_debt_result').html(value);
		 	 sum_debt = value;
		 }
	}); 



	$('#sum_debt_plus').click(function() {
		var sum = $('#sum_debt').attr('data-value');
		console.log(sum);
		sum = parseInt(sum);
		sum = sum + 5000;
		// var pos = sum + 0.0961;
		sum_debt = sum;
		$('#sum_debt').attr('value',sum);
		$('#sum_debt').attr('data-value',sum);
		// $('#sumDebt').children('.min-slider-handle').attr('aria-valuenow',sum);
		// $('#sumDebt').children('.toolip-main').css('left',pos);
		// $('#sumDebt').children('.min-slider-handle').css('left',pos);
		$('#sum_debt_result').html(sum);
	});

	$('#sum_debt_minus').click(function() {
		var sum = $('#sum_debt').attr('data-value');
		console.log(sum);
		sum = parseInt(sum);
		sum = sum - 5000;
		// var pos = sum - 0.0961;
		sum_debt = sum;
		$('#sum_debt').attr('value',sum);
		$('#sum_debt').attr('data-value',sum);
		// $('#sumDebt').children('.min-slider-handle').attr('aria-valuenow',sum);
		// $('#sumDebt').children('.toolip-main').css('left',pos);
		// $('#sumDebt').children('.min-slider-handle').css('left',pos);
		$('#sum_debt_result').html(sum);
	});

	$('#sum_fines').slider({
		 formatter: function(value) {
		 	 $('#sum_fines_result').html(value);
		 	 sum_fines = value;
		 }
	});

	$('#sum_fines_plus').click(function() {
		var sum = $('#sum_fines').attr('data-value');
		console.log(sum);
		sum = parseInt(sum);
		sum = sum + 5000;
		// var pos = sum + 0.0961;
		sum_debt = sum;
		$('#sum_fines').attr('value',sum);
		$('#sum_fines').attr('data-value',sum);
		// $('#sumDebt').children('.min-slider-handle').attr('aria-valuenow',sum);
		// $('#sumDebt').children('.toolip-main').css('left',pos);
		// $('#sumDebt').children('.min-slider-handle').css('left',pos);
		$('#sum_fines_result').html(sum);
	});

	$('#sum_fines_minus').click(function() {
		var sum = $('#sum_fines').attr('data-value');
		console.log(sum);
		sum = parseInt(sum);
		sum = sum - 5000;
		// var pos = sum - 0.0961;
		sum_debt = sum;
		$('#sum_fines').attr('value',sum);
		$('#sum_fines').attr('data-value',sum);
		// $('#sumDebt').children('.min-slider-handle').attr('aria-valuenow',sum);
		// $('#sumDebt').children('.toolip-main').css('left',pos);
		// $('#sumDebt').children('.min-slider-handle').css('left',pos);
		$('#sum_fines_result').html(sum);
	});

	$('#sum_surcharge').slider({
		  formatter: function(value) {
		 	 $('#sum_surcharge_result').html(value);
		 	 sum_surcharge = value;
		 }
	});

	$('#sum_surcharge_plus').click(function() {
		var sum = $('#sum_surcharge').attr('data-value');
		console.log(sum);
		sum = parseInt(sum);
		sum = sum + 5000;
		// var pos = sum + 0.0961;
		sum_debt = sum;
		$('#sum_surcharge').attr('value',sum);
		$('#sum_surcharge').attr('data-value',sum);
		// $('#sumDebt').children('.min-slider-handle').attr('aria-valuenow',sum);
		// $('#sumDebt').children('.toolip-main').css('left',pos);
		// $('#sumDebt').children('.min-slider-handle').css('left',pos);
		$('#sum_surcharge_result').html(sum);
	});

	$('#sum_surcharge_minus').click(function() {
		var sum = $('#sum_surcharge').attr('data-value');
		console.log(sum);
		sum = parseInt(sum);
		sum = sum - 5000;
		// var pos = sum - 0.0961;
		sum_debt = sum;
		$('#sum_surcharge').attr('value',sum);
		$('#sum_surcharge').attr('data-value',sum);
		// $('#sumDebt').children('.min-slider-handle').attr('aria-valuenow',sum);
		// $('#sumDebt').children('.toolip-main').css('left',pos);
		// $('#sumDebt').children('.min-slider-handle').css('left',pos);
		$('#sum_surcharge_result').html(sum);
	});

    solvency = parseFloat($('.calculator-section__checkbox input:checked').val());
	$('.calculator-section__checkbox label').click(function() {
		  solvency = parseFloat($(this).siblings().val());
		  console.log('solvency ',solvency);
	});

	$('#sum_calculate').click(function(e) {
		 e.preventDefault();


         var fines_surcharge = sum_fines + sum_surcharge;
     
		 // var result = parseFloat((sum_debt + fines_surcharge) / sum_debt + (fines_surcharge / 1.5) * solvency).toFixed(0);
		 if(solvency == 0 || solvency == 0.4 || solvency == 0.6 || solvency == 0.8) {
		     var result = ((sum_debt * fines_surcharge/3) * solvency) * 0.35;
		     console.log('count - 0, 0.4, 0.6, 0.8');
		 }
		 if(solvency == 0.2) {
		 	 var result = ((sum_debt * fines_surcharge/3) * solvency) * 0.7;
		 	 console.log('count - 0.2');
		 }
	
		
		 var sum = parseFloat(result).toFixed(0);
		 var money = Intl.NumberFormat("ru-RU", {minimumFractionDigits : 0, minimumSignificantDigits: 1}).format(sum);
		
		 $('#sum_result span').text(money);

		 // console.log('sum_debt - ', sum_debt);
		 // console.log('sum_fines - ', sum_fines);
		 // console.log('sum_surcharge - ', sum_surcharge);
		 // console.log('solvency - ', solvency);

		
	});
	/*CALCULATOR*/ 

	/*FEEDBACK MODAL*/
	var timer = 0;
	function removeSuccessResult() {
		// $('.feedback-modal__error').removeClass('show');
		$('.feedback-modal__success').removeClass('show');
		clearTimeout(timer);
	}
	function removeErrorResult() {
		$('.feedback-modal__error').removeClass('show');
		clearTimeout(timer);
	}
	$('form').submit(function(e) {
		 e.preventDefault();

		 var $form = $(this);
		 $.ajax({
		 	 type: $form.attr('method'),
		 	 url: $form.attr('action'),
		 	 data: $form.serialize(),
		 	 success: function(response) {
		 	 	console.log(response);
		 	 	if(response == "true") {
		 	 		// $('.feedback-modal__error').removeClass('show');
		 	 		$('.feedback-modal__success').addClass('show');
		 	 		timer = setTimeout(removeSuccessResult, 3000);
		 	 	}
		 	 	else {
		 	 		// $('.feedback-modal__success').removeClass('show');
		 	 		$('.feedback-modal__error').addClass('show');
		 	 		timer = setTimeout(removeErrorResult, 3000);
		 	 	}
		 	 },
		 	 error: function(error) {
		 	 	console.log(error);
		 	 }
		 });
	}); 
	/*FEEDBACK MODAL*/ 


});