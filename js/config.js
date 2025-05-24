/* --------------------------------------------------------------------------
 * File        : config.js
 * Version     : 1.0
 * Author      : Indonez Team
 * Author URI  : http://indonez.com
 *
 * Indonez Copyright 2016 All Rights Reserved.
 * -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
 * javascript handle initialization
      1. To top Jquery
      2. Testimonial Slider
 *
 * -------------------------------------------------------------------------- */

	  (function($){

		"use strict";
		
		var themeApp = {
			
			//----------- 1. To top Jquery ----------- 
			theme_scrollUP:function() {
			   
			$(document).scroll(function () {
				var toTop = $('.to-top');
	
				if ($(this).scrollTop() > 400) {
					toTop.fadeIn();
				} else {
					toTop.fadeOut();
				}
			});
			},
	
			//----------- 2. Testimonial Slider ----------- 
			theme_testimonial_scroll:function() {
				UIkit.on('domready.uk.dom', function() {
				//Change slideshow on focuschange of slider
				var slideshow = UIkit.slideshow('#idz-slideshow');
					$('#idz-slider').on('focusitem.uk.slider', function(event, index, item, slider) {
					  slideshow.show($(item).data('ukSlideshowItem'));
					});
				});
			},
	
			theme_init:function(){
				themeApp.theme_scrollUP();
				themeApp.theme_testimonial_scroll();
			}
			
		}//end themeApp
		
	
		jQuery(document).ready(function($){
			themeApp.theme_init();
		});
		
	})(jQuery);
	
	// Tính toán tổng tiền khi chọn số lượng sách
	// document.addEventListener('DOMContentLoaded', function() {
	// 	const quantitySelect = document.getElementById('book-quantity');
	// 	const totalPriceInput = document.getElementById('total-price');
	// 	const customQuantityDiv = document.getElementById('custom-quantity');
	// 	const customQuantityInput = customQuantityDiv.querySelector('input');
	
	// 	function calculateTotal() {
	// 		let quantity;
	// 		if (quantitySelect.value === 'more') {
	// 			quantity = parseInt(customQuantityInput.value) || 5;
	// 		} else {
	// 			quantity = parseInt(quantitySelect.value);
	// 		}
	
	// 		let pricePerBook;
	// 		if (quantity <= 2) {
	// 			pricePerBook = 123000;
	// 		} else if (quantity <= 4) {
	// 			pricePerBook = 112000;
	// 		} else {
	// 			pricePerBook = 102000;
	// 		}
			
	// 		const total = quantity * pricePerBook;
	// 		totalPriceInput.value = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
	// 	}
	
	// 	quantitySelect.addEventListener('change', function() {
	// 		if (this.value === 'more') {
	// 			customQuantityDiv.style.display = 'block';
	// 			customQuantityInput.value = '5';
	// 		} else {
	// 			customQuantityDiv.style.display = 'none';
	// 		}
	// 		calculateTotal();
	// 	});
	
	// 	customQuantityInput.addEventListener('input', calculateTotal);
		
	// 	// Tính toán giá trị ban đầu
	// 	calculateTotal();
	
	// 	// Xử lý form submit
	// 	const orderForm = document.getElementById('order-book-form');
	// 	if (orderForm) {
	// 		orderForm.addEventListener('submit', function(e) {
	// 			e.preventDefault();
	
	// 			const submitButton = this.querySelector('button[type="submit"]');
	// 			submitButton.innerHTML = '<i class="uk-icon-spinner uk-icon-spin"></i> Đang xử lý...';
	// 			submitButton.disabled = true;
	// 			// Lấy thông tin từ form
	// 			const name = document.getElementById('name').value;
	// 			const phone = document.getElementById('phone').value;
	// 			const address = document.getElementById('address').value;
	// 			const quantity = document.getElementById('book-quantity').value;
	// 			const customQuantity = document.getElementById('custom_quantity').value;
	// 			const total = document.getElementById('total-price').value;
	// 			const note = document.getElementById('note').value;
	
	// 			// Log thông tin đơn hàng ra console
	// 			console.log('=== THÔNG TIN ĐƠN HÀNG ===');
	// 			console.log('Khách hàng:', name);
	// 			console.log('Số điện thoại:', phone);
	// 			console.log('Địa chỉ:', address);
	// 			console.log('Số lượng:', quantity === 'more' ? customQuantity : quantity, 'cuốn');
	// 			console.log('Tổng tiền:', total);
	// 			console.log('Ghi chú:', note);
	// 			console.log('========================');
	
	// 			// Tạo nội dung tin nhắn
	// 			const message = `
	// 🛍️ ĐƠN HÀNG MỚI:
	// 👤 Khách hàng: ${name}
	// 📱 SĐT: ${phone}
	// 📍 Địa chỉ: ${address}
	// 📚 Số lượng: ${quantity === 'more' ? customQuantity : quantity} cuốn
	// 💰 Tổng tiền: ${total}
	// 📝 Ghi chú: ${note}
	// 			`;
	
	// 			// Gửi qua email bằng formsubmit.co
	// 			fetch('https://formsubmit.co/ajax/duynoa2024@gmail.com', {
	// 				method: 'POST',
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					'Accept': 'application/json',
	// 					'Activation-Key': 'YOUR_ACTIVATION_KEY_HERE' // Thay YOUR_ACTIVATION_KEY_HERE bằng key thật của bạn
	// 				},
	// 				body: JSON.stringify({
	// 					name: name,
	// 					phone: phone,
	// 					message: message,
	// 					_captcha: false // Tắt captcha
	// 				})
	// 			}).then(() => {
	// 				// Hiển thị thông báo thành công
	// 				alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
	// 				this.reset();
	// 				submitButton.innerHTML = '<i class="uk-icon-shopping-cart"></i> Đặt Hàng';
	// 				submitButton.disabled = false;
	// 			}).catch(error => {
	// 				console.error('Lỗi:', error);
	// 				alert('Có lỗi xảy ra. Vui lòng thử lại sau!');
	// 				submitButton.innerHTML = '<i class="uk-icon-shopping-cart"></i> Đặt Hàng';
	// 				submitButton.disabled = false;
	// 			});
	// 		});
	// 	}
	// });
	
	// // Xử lý sự kiện click cho các nút đặt hàng
	// document.addEventListener('DOMContentLoaded', function() {
	// 	// Xử lý nút đặt hàng trong header
	// 	const orderButtons = document.querySelectorAll('.idz-button-orange');
	// 	orderButtons.forEach(button => {
	// 		button.addEventListener('click', function(e) {
	// 			e.preventDefault();
	// 			const modal = document.getElementById('client-area');
	// 			if (modal) {
	// 				modal.classList.add('uk-open');
	// 				modal.style.display = 'block';
	// 			}
	// 		});
	// 	});
	
	// 	// Xử lý nút đóng modal
	// 	const closeButtons = document.querySelectorAll('.uk-modal-close');
	// 	closeButtons.forEach(button => {
	// 		button.addEventListener('click', function() {
	// 			const modal = document.getElementById('client-area');
	// 			if (modal) {
	// 				modal.classList.remove('uk-open');
	// 				modal.style.display = 'none';
	// 			}
	// 		});
	// 	});
	
	// 	// Xử lý click bên ngoài modal để đóng
	// 	const modal = document.getElementById('client-area');
	// 	if (modal) {
	// 		modal.addEventListener('click', function(e) {
	// 			if (e.target === modal) {
	// 				modal.classList.remove('uk-open');
	// 				modal.style.display = 'none';
	// 			}
	// 		});
	// 	}
	
	// 	// Xử lý menu navigation
	// 	const navLinks = document.querySelectorAll('#idz-nav .uk-navbar-nav a');
	// 	navLinks.forEach(link => {
	// 		link.addEventListener('click', function(e) {
	// 			if (!this.hasAttribute('data-uk-modal')) {
	// 				e.preventDefault();
	// 				const target = this.getAttribute('href').substring(1);
	// 				const element = document.getElementById(target);
	// 				if (element) {
	// 					element.scrollIntoView({ behavior: 'smooth' });
	// 				}
	// 			}
	// 		});
	// 	});
	
	// 	// Xử lý nút "To Top"
	// 	const toTop = document.querySelector('.to-top');
	// 	if (toTop) {
	// 		window.addEventListener('scroll', function() {
	// 			if (window.pageYOffset > 300) {
	// 				toTop.style.display = 'block';
	// 			} else {
	// 				toTop.style.display = 'none';
	// 			}
	// 		});
	
	// 		toTop.addEventListener('click', function(e) {
	// 			e.preventDefault();
	// 			window.scrollTo({ top: 0, behavior: 'smooth' });
	// 		});
	// 	}
	// });
	