
document.addEventListener('DOMContentLoaded', function () {
	const $ = document.querySelector.bind(document);
	const $$ = document.querySelectorAll.bind(document);


	function handleWhenScroll() {
		// Sticky
		const header = $(".nav__main");
		const sticky = header.offsetTop;
		window.onscroll = () => {
			if (window.matchMedia('screen and (min-width: 1200px)').matches) {
				if (window.pageYOffset >= sticky) {
					header.classList.add("sticky");
				}
				else {
					header.classList.remove("sticky");
				}
			}
			else {
				if (window.pageYOffset <= sticky) {
					header.classList.remove("sticky");
				}
				else {
					header.classList.add("sticky");
				}
			}
		};
	}
	handleWhenScroll();


	// Button Search
	$(".nav-search__search").addEventListener("click", () => {
		$(".nav-search").classList.add("active");
		$(".nav-search__button").classList.add("active");
	});
	$(".nav-search__close").addEventListener("click", () => {
		$(".nav-search").classList.remove("active");
		$(".nav-search__button").classList.remove("active");
	});

	// Count total on cart
	// function countQuantity() {
	// 	let number = $(".nav-cart__amount");
	// 	let cartItems = $$(".nav-cart__item");

	// 	count = 0;
	// 	cartItems.forEach(item => {
	// 		if (item) {
	// 			count++;
	// 		}
	// 		else count;
	// 	});

	// 	return number.textContent = count;
	// }
	// countQuantity();

	function handleButtonMenu() {
		// Button Menu Mobile
		const toggleMenu = $(".nav-button__toggle");
		const showMenu = $('.nav-menu');
		const iconDownMenu = $$(".nav-menu__icon");
		const dropMenus = $$(".nav-dropdown");
		const info = $(".nav-info");

		// Kiểm tra nếu bấm outside thì menu sẽ tắt
		document.addEventListener('click', function (event) {
			var clickInsideToggle = toggleMenu.contains(event.target);
			var clickInsideMenu = showMenu.contains(event.target);
			var clickInsideInfo = info.contains(event.target);
			if (!clickInsideToggle && !clickInsideMenu && !clickInsideInfo) {
				toggleMenu.classList.remove("open");
				showMenu.classList.remove("show");
				info.classList.remove("active");
			}
		});

		// Show menu mobile
		toggleMenu.addEventListener("click", () => {
			toggleMenu.classList.toggle("open");
			showMenu.classList.toggle("show");
		});

		// Button Icon down show sub menu
		iconDownMenu.forEach((item, index) => {
			const dropMenu = dropMenus[index];
			item.addEventListener("click", function () {
				this.classList.toggle("active");
				dropMenu.classList.toggle("show");
			});
		});

		// Show Info
		info.addEventListener("click", () => {
			info.classList.toggle("active");
		});
	}
	handleButtonMenu();




	function handleShowHideCart() {

		let overlay = $(".nav__overlay");
		let buttonCart = $(".nav-cart__button");

		let cartToggle = $(".nav-cart__toggle");
		let closeToggle = $(".nav-cart__close");

		let productsAdd = $$(".product__add");

		let boxParentMsg = $(".nav-cart__view");
		let message = $(".cart__message");
		let buttonRemove = $(".nav-cart__remove");

		function clickButtonCart() {
			if (buttonCart) {
				buttonCart.addEventListener("click", function () {
					addOverToggleMess();
					message.remove();
				});
			}
		}
		clickButtonCart();

		function clickButtonAddCart() {
			productsAdd.forEach((product, index) => {
				if (product) {
					product.addEventListener("click", function () {
						addOverToggleMess();
						boxParentMsg.appendChild(message);

					});
				}
			});
		}
		clickButtonAddCart();

		// if (buttonRemove) {
		// 	buttonRemove.addEventListener("click", function (e) {
		// 	});
		// }

		function clickOverlay() {
			if (overlay) {
				overlay.addEventListener("click", function () {
					removeOverToggleMess();
				});
			}
		}
		clickOverlay();

		function clickCloseCart() {
			if (closeToggle) {
				closeToggle.addEventListener("click", function () {
					removeOverToggleMess();
				});
			}
		}
		clickCloseCart();

		function removeOverToggleMess() {
			overlay.classList.remove("active--overlay");
			cartToggle.classList.remove("active--toggle");
			message.remove();
		}

		function addOverToggleMess() {
			overlay.classList.add("active--overlay");
			cartToggle.classList.add("active--toggle");
		}


		cartToggle.addEventListener("click", function () {
			message.remove();
		});

	};
	handleShowHideCart();



	function handleTab() {
		// Button Tab About
		const tabs = $$(".about__item");
		const panes = $$(".about__pane");

		tabs.forEach((tab, index) => {
			const pane = panes[index];
			tab.addEventListener("click", function () {
				$(".about__item.active").classList.remove("active");
				$(".about__pane.active").classList.remove("active");

				this.classList.add("active");
				pane.classList.add("active");
			});
		});
	}
	handleTab();


	function slideMoveFeedback() {

		// Slider drag
		if (window.matchMedia('screen and (min-width: 1200px)').matches) {

			let slider = $(".feedback__clients");

			let isDown = false;
			let startX;
			let scrollLeft;

			slider.addEventListener("mousedown", (e) => {
				isDown = true;
				startX = e.pageX - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
				slider.style.cursor = "grabbing";
			});


			slider.addEventListener("mouseenter", () => {
				slider.style.cursor = "grab";
			});

			slider.addEventListener("mouseup", () => {
				isDown = false;
				slider.style.cursor = "grab";
			});

			slider.addEventListener("mousemove", (e) => {
				if (!isDown) return;
				e.preventDefault();
				const x = e.pageX - slider.offsetLeft;
				const walk = x - startX;
				slider.scrollLeft = scrollLeft - walk;
			});
		}
	}
	slideMoveFeedback();

});
