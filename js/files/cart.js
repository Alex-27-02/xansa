const productsBtn = document.querySelectorAll('.content__button');
const cartProductsList = document.querySelector('.cart-header__list');
const cart = document.querySelector('.cart-header');
const cartQuantity = cart.querySelector('.cart-header__quantity');
const fullPrice = document.querySelector('.fullprice');
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
};
//Удаление пробелов строки (10 253 р ИТОГ 10253р)
const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};
/*
const  = (str) => {
	return str.replace(/\s/g, '');
};*/
//Добавление пробелов строки (10253р ИТОГ 10 253 р)
const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};



const generateCartProduct = (img, title, price, id) => {
	return `
		<li class="cart-header__item">
			<article class="cart-content__product card-product" data-id="${id}">
				<img src="${img}" alt="" class="card-product__item-image-ibg card-product__item-image">
				<div class="cart-product__text">
					<h3 class="cart-product__title">${title}</h3>
					<span class="cart-product__price">${normalPrice(price)}</span>
				</div>
				<button class="cart-product__delete" aria-label="Удалить товар"></button>
			</article>
		</li>
	`;
};


productsBtn.forEach(el => {
	el.closest('.product-card').setAttribute('data-id', randomId());

	el.addEventListener('click', (e) => {
	});
});
