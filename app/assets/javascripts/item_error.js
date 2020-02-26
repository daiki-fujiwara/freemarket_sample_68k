$(function(){
	$(".product-listings-page__main__contents__send-box__btn").on('click',function(e){
    if(!input_check()){
			e.preventDefault();
			return false;
		}
	});
});

function input_check(){
	let result = true;
	$('.product-listings-page__main__contents__photo-box__drop-area__file').removeClass("inp_error");
	$('.product-listings-page__main__contents__name-box__text-field').removeClass("inp_error");
	$('.product-listings-page__main__contents__name-box__text-area').removeClass("inp_error");
	$('.product-listings-page__main__contents__detail-box__select-list__category-form--first__value').removeClass("inp_error");
	$('.product-listings-page__main__contents__detail-box__select-list__category-form--second__value').removeClass("inp_error");
	$('.product-listings-page__main__contents__detail-box__select-list__category-form--third__value').removeClass("inp_error");
	$('.product-listings-page__main__contents__detail-box__select-list__size-form__value').removeClass("inp_error");
	$('.product-listings-page__main__contents__detail-box__select-list__condition-form__value').removeClass("inp_error");
	$('.product-listings-page__main__contents__delivery-box__select-list__shipping-form__value').removeClass("inp_error");
	$('.product-listings-page__main__contents__delivery-box__select-list__method-form__value').removeClass("inp_error");
	$('.product-listings-page__main__contents__delivery-box__select-list__area-form__value').removeClass("inp_error");
	$('.product-listings-page__main__contents__delivery-box__select-list__days-form__value').removeClass("inp_error");
	$('.product-listings-page__main__contents__price-box__form-box__lists-price-right__form').removeClass("inp_error");
  
	$("#image_error").empty();
	$("#name_error").empty();
	$("#content_error").empty();
	$("#category_error").empty();
	$("#condition_error").empty();
	$("#shipping_error").empty();
	$("#shipping_method_error").empty();
	$("#shipping_area_error").empty();
	$("#days_to_ship_error").empty();
	$("#price_error").empty();


	let image      =$(".product-listings-page__main__contents__photo-box__drop-area__file").val();
	let name         =$(".product-listings-page__main__contents__name-box__text-field").val();
	let content      =$(".product-listings-page__main__contents__name-box__text-area").val();
	let category1        =$(".product-listings-page__main__contents__detail-box__select-list__category-form--first__value").val();
	let category2        =$(".product-listings-page__main__contents__detail-box__select-list__category-form--second__value").val();
	let category3        =$(".product-listings-page__main__contents__detail-box__select-list__category-form--third__value").val();
	let size        =$(".product-listings-page__main__contents__detail-box__select-list__size-form__value").val();
	let condition  =$(".product-listings-page__main__contents__detail-box__select-list__condition-form__value").val();
	let shipping  =$(".product-listings-page__main__contents__delivery-box__select-list__shipping-form__value").val();
	let shipping_method  =$(".product-listings-page__main__contents__delivery-box__select-list__method-form__value").val();
	let shipping_area  =$(".product-listings-page__main__contents__delivery-box__select-list__area-form__value").val();
	let days_to_ship  =$(".product-listings-page__main__contents__delivery-box__select-list__days-form__value").val();
	let price  =$(".product-listings-page__main__contents__price-box__form-box__lists-price-right__form").val();
	

	if(nickname == ""){
		$("#nickname_error").html(" ニックネームを入力してください");
		$(".main__box__contents__nickname__form").addClass("inp_error");
		result = false;
	}
	
	if(email == ""){
		$("#email_error").html(" メールアドレスを入力してください。");
		$(".main__box__contents__email__form").addClass("inp_error");
		result = false;
	}else if(!email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
		$('#email_error').html("フォーマットが不適切です");
		$(".main__box__contents__email__form").addClass("inp_error");
		$(".main__box__contents__pass__top").addClass("error_expand");
		$(".main__box__contents__ident").addClass("error_expandh");
		result = false;
	}

  if(password == ""){
		$("#password_error").html(" パスワードを入力してください");
		$(".main__box__contents__pass__form").addClass("inp_error");
		result = false;
	}else if(password.length < 7 || password.length > 128 ){
		$("#password_error").html(" 7文字以上 128文字以下で入力してください。");
		$(".main__box__contents__pass__form").addClass("inp_error");
		result = false;
	}else if(!password.match(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]/i)){
		$("#password_error").html(" フォーマットが不適切です");
		$(".main__box__contents__pass__form").addClass("inp_error");
		result = false;
	}

	if(repeat == ""){
		$("#repeat_error").html(" パスワードを入力してください");
		$(".main__box__contents__pass__repeat").addClass("inp_error");
		result = false;
	}else if(repeat.length < 7 || repeat.length > 128 ){
		$("#repeat_error").html(" 7文字以上 128文字以下で入力してください。");
		$(".main__box__contents__pass__repeat").addClass("inp_error");
		result = false;
	}else if(password !== repeat){
		$("#repeat_error").html(" 同じパスワードを入力してください");
		$(".main__box__contents__pass__repeat").addClass("inp_error");
		result = false;
	}

	if(nameseikanzi == ""){
		$(".main__box__contents__name__error__family").html("姓を入力してください");
		$(".main__box__contents__name__form__family").addClass("inp_error");
		result = false;
	}else if(!nameseikanzi.match(/^[一-龥ぁ-ん]+$/)){
		$(".main__box__contents__name__error__family").html("姓(全角)入力してください");
		$(".main__box__contents__name__form__family").addClass("inp_error");
		result = false;
	}

	if(namemeikanzi == ""){
		$(".main__box__contents__name__error__last").html("名を入力してください");
		$(".main__box__contents__name__form__last").addClass("inp_error");
		result = false;
	}else if(!namemeikanzi.match(/^[一-龥ぁ-ん]+$/)){
		$(".main__box__contents__name__error__last").html("名(全角)入力してください");
		$(".main__box__contents__name__form__last").addClass("inp_error");
		result = false;
	}

	if(nameseikana == ""){
		$(".main__box__contents__kana__error__j-family").html("姓を入力してください");
		$(".main__box__contents__kana__form__j-family").addClass("inp_error");
		result = false;
	}else if(!nameseikana.match(/^[ぁ-ん]+$/)){
		$(".main__box__contents__kana__error__j-family").html("姓ひらがな(全角)入力");
		$(".main__box__contents__kana__form__j-family").addClass("inp_error");
		result = false;
	}

	if(namemeikana == ""){
		$(".main__box__contents__kana__error__j-last").html("名を入力してください");
		$(".main__box__contents__kana__form__j-last").addClass("inp_error");
		result = false;
	}else if(!namemeikana.match(/^[ぁ-ん]+$/)){
		$(".main__box__contents__kana__error__j-last").html("名ひらがな(全角)入力");
		$(".main__box__contents__kana__form__j-last").addClass("inp_error");
		result = false;
	}
	
	if(b_year == "" && b_month == "" && b_day == ""){
		$("#b_year_error").html("生年月日を入力してください");
		$(".main__box__contents__birth__middle__year__box").addClass("inp_error");
		$(".main__box__contents__birth__middle__month__box").addClass("inp_error");
		$(".main__box__contents__birth__middle__date__box").addClass("inp_error");
		result = false;
	}
	if(b_year == "" ){
		$("#b_year_error").html("生年月日を入力してください");
		$(".main__box__contents__birth__middle__year__box").addClass("inp_error");
		result = false;
	}
	if(b_month == "" ){
		$("#b_year_error").html("生年月日を入力してください");
		$(".main__box__contents__birth__middle__month__box").addClass("inp_error");
		result = false;
	}
	if( b_day == ""){
		$("#b_year_error").html("生年月日を入力してください");
		$(".main__box__contents__birth__middle__date__box").addClass("inp_error");
		result = false;
	}
	return result;
}

// $(function(){
// 	$('#password').on('change', function(){
// 		let password = $('#user_password').val();
// 		let check = $('#password').prop('checked');
// 		if(check){
// 		$('.main__box__contents__pass__display').html(password);
// 		$('.main__box__contents__pass__display').addClass("pass-display");
// 		}
// 		else {
// 			$('.main__box__contents__pass__display').text('')
// 		}
// 	});
// });