import {getProducts} from './getProducts.js';
import {countingTheNumberOfItemsInTheCart} from './cartProducts.js';
import {getCartProducts} from './cartProducts.js';

function renderProducts(products, catalogEl) {
    let productsHtml = '';

    for (let i = 0; i < products.length; i++) {

        let popularClass = '';
        if (products[i].popular === true) {
            popularClass = 'popular';
        }

        let saleClass = '';
        if (products[i].sale === true) {
            saleClass = 'sale'
        }

        if (products[i].pricePostfix === undefined) {
            products[i].pricePostfix = '';
        }

        productsHtml = productsHtml + '<div class="catalog_wrap ' + popularClass + ' ">' +
            '                <div class="catalog_img ' + saleClass + '">' +
            '                    <a href="/infaDessert.html?name=' + encodeURI(products[i].name) + '"><img src="' + products[i].img + '"></a>' +
            '                </div>' +
            '                <div class="catalog_inform">' +
            '                    <h3 class="catalog_inform_name"><a title="' + products[i].name + '" href="/infaDessert.html?name=' + encodeURI(products[i].name) + '">' + products[i].name + '</a></h3>' +
            '                    <span>' + products[i].price + ' ' + products[i].currency + ' ' + products[i].pricePostfix + '</span>' +
            '                    <a href="/infaDessert.html?name=' + encodeURI(products[i].name) + '"><button class="catalog_but">Выбрать параметры</button></a>' +
            '                </div>' +
            '            </div>';
    }
    catalogEl.insertAdjacentHTML('beforeend', productsHtml);
}

const addProductsAfterTable = addMoreProducts();
window.addEventListener('load', function () {
    addProductsAfterTable();
});

const btnAddMore = document.getElementById('more_goods');
if (btnAddMore) {
    btnAddMore.addEventListener('click', addProductsAfterTable);
}


function hideAddMoreButton() {
    const btnAddMore = document.getElementById('more_goods');
    if (!btnAddMore) {
        return;
    }

    btnAddMore.remove();
}

function addMoreProducts() {
    let i = 0;
    let catalogElements = document.querySelector('.cakes_catalog .catalog'); //div[]
    const products = getProducts();

    return function () {
        if (i >= products.length) {
            hideAddMoreButton();
            return;
        }

        let lastIndex = i + 8;
        let filteredProducts = [];
        while (i < products.length && i < lastIndex) {
            filteredProducts.push(products[i]);
            i++;
        }

        renderProducts(filteredProducts, catalogElements);
    };

}

const productsCartBasket = getCartProducts();

if (productsCartBasket.length == 0) {
    removeCartTable();
} else {
    for (let i = 0; i < productsCartBasket.length; i++) {
        let product = productsCartBasket[i];

        let htmlOptions = '';
        for (let j = 0; j < product.options.length; j++) {
            htmlOptions += `<p class="options_product">${product.options[j].name} : ${product.options[j].selected} </p>`;

        }

        let htmlBasket = '';
        htmlBasket = `<tr class="general_purchase_information">
                    <td data-title="Товар" class="product_container">
                        <div class="product_inform">
                           <span class="remove_product_container"><i class="remove_product_cart fa-regular fa-x"></i></span>
                            <div class="product_inform_img"><a href="/infaDessert.html?name=${encodeURI(product.name)}"><img src="${product.img}" alt=""></a></div>
                            <div>
                                <p class="name_product"><a href="/infaDessert.html?name=${encodeURI(product.name)}"><b>${product.name}</b></a></p>
                                ${htmlOptions}
                            </div>
                        </div>
                    </td>
                    <td data-title="Количество" class="amount_td">
                        <div style="display: flex">
                        <div class="dessert_additional_basket_amount">
                            <div class="klik-quantity klik_amount_minus" data-price="${product.price}"><i class="fa-solid fa-minus" data-action="minus"></i></div>
                            <span class="amount">${product.quantity}</span>
                            <div class="klik-quantity klik_amount_minus" data-price="${product.price}"><i class="fa-solid fa-plus" data-action="plus"></i></div>
                        </div>
                        </div>
                    </td>
                    <td data-title="Цена" class="price">${product.price * product.quantity}</td>
                </tr>`

        const basketProductInform = document.querySelector('.basket_product_inform tbody')
        basketProductInform.insertAdjacentHTML('beforeend', htmlBasket);

    }
    updateTotalPrice();
}


window.addEventListener('click', function (event) {
    const basketAmount = event.target.closest('.dessert_additional_basket_amount');
    const elCart = event.target.closest('.general_purchase_information');
    if (basketAmount && elCart) {
        const amount = basketAmount.querySelector('.amount');
        if (event.target.dataset.action === 'plus') {
            amount.innerText = ++amount.innerText;
            updateProductPrice(event.target, amount.innerText);
        }
        if (event.target.dataset.action === 'minus') {
            if (parseInt(amount.innerText) > 1) {
                amount.innerText = --amount.innerText;
                updateProductPrice(event.target, amount.innerText);
            }
        }

        updateProductCartCookieQuantity(Number(amount.innerText), elCart.querySelector('.name_product').innerText);
    }
});

function removeProductCartCookie(productName) {
    const products = getCartProducts();
    const cartUpdate = [];
    for (let i = 0; i < products.length; i++) { // проходимся по массиву и ищем совпадения с productName
        if (products[i].name !== productName) {
            cartUpdate.push(products[i]); // удаляем соответсвующий продукт из массива
        }
    }
    document.cookie = 'cart=' + JSON.stringify(cartUpdate); // устанавливаем новые куки
}

function updateProductCartCookieQuantity(quantity, productName) {
    const products = getCartProducts();
    for (let i = 0; i < products.length; i++) { // проходимся по массиву и ищем совпадения с productName
        if (products[i].name === productName) {
            products[i].quantity = quantity; // обновляем кол-во
        }
    }
    document.cookie = 'cart=' + JSON.stringify(products);  // устанавливаем новые куки
}

function updateProductPrice(quantityIcon, quantity) {
    const container = quantityIcon.closest('.general_purchase_information'); //tr
    if (!container) {
        return;
    }

    let priceInfoEl = container.querySelector('.price'); // цена * кол-во товара (старая)
    if (priceInfoEl) {
        let oneItemPrice = quantityIcon.closest('.klik-quantity').dataset.price; //цена за 1 товар
        priceInfoEl.innerText = oneItemPrice * quantity;
        updateTotalPrice();
    }
}

const removeProductCarts = document.querySelectorAll('.remove_product_cart'); // знак удалить
for (let i = 0; i < removeProductCarts.length; i++) {
    let removeProductCart = removeProductCarts[i];
    removeProductCart.addEventListener('click', function (event) {
        const elCart = event.target.closest('.general_purchase_information');//родитель
        const nameProduct = elCart.querySelector('.name_product');

        if (elCart) {
            const ask = confirm("Вы уверены, что хотите удалить " + nameProduct.innerText + "?");
            if (ask === true) {
                removeProductCartCookie(nameProduct.innerText)
                elCart.remove();
                updateTotalPrice();
                countingTheNumberOfItemsInTheCart()
            }
        }
        removeCartTable()
    })
}

function removeCartTable() {
    const basketProductInform = document.querySelector('.basket_product_inform'); // table
    const container = basketProductInform.querySelector('.general_purchase_information'); // tr
    if (!container) {
        const basketProductInformTable = document.querySelector('.basket_product_inform_wrapper');
        const cartIsEmptyContainer = document.querySelector('.cart_is_empty_container')
        basketProductInformTable.style.display = "none";
        cartIsEmptyContainer.style.display = "block";
    }
}

function updateTotalPrice() {
    let pricePlus = 0;
    let totalPrice = document.querySelector('.total-price');
    let price = document.querySelectorAll('.price');
    for (let i = 0; i < price.length; i++) {
        pricePlus = Number(price[i].innerText) + pricePlus;
    }
    totalPrice.innerText = pricePlus;
}







