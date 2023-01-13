import {getProducts} from './getProducts.js';


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


function getQueryVariable(variable) {
    // vk.com/anastasiya?friends=all&list=relatives
    const query = window.location.search.substring(1);
    const vars = query.split('&'); // (var1=value1)[]
    // ['friends=all', 'list=relatives']
    //
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('='); // const a = ['var1', 'value1'];

        if (pair[0] === variable) {
            return decodeURI(pair[1]);
        }
    }
    return null;
}

const productName = getQueryVariable('name');
const products = getProducts();
let product = null;

for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
        product = products[i];
        break;
    }
}

if (product !== null) {
    renderProduct(product)
}

function renderProduct(product) {

    const dessertContainer = document.querySelector('.dessert_wrapper');
    let productsHtml = '';

    let popularClass = '';
    if (product.popular === true) {
        popularClass = 'popular_dessert';
    }

    let saleClass = '';
    if (product.sale === true) {
        saleClass = 'sale_dessert'
    }

    const bundlesSelect = getBundlesSelect(product)
    const selects = getOptionsInHTMl(product.options);
    productsHtml = `
         <div class="dessert_container">
            <div class="dessert_img">
                <div class="${popularClass} ${saleClass}">
                    <img class="img_des" src="${product.img}">
                </div>
            </div>
            <div class="dessert_text">
                <h1 id="name_dessert">${product.name}</h1>
                <h3 class="dessert_cost"><span id = "dessert_cost">${getPrice(product)}</span> ${product.currency}</h3>
                <p>${product.description}</p>
                <div class="dessert_additional_infa">
                    ${bundlesSelect}
                     ${selects}
                </div>
                <div class="dessert_additional_com">
                    <p>Добавьте комментарии к заказу при необходимости</p>
                    <div class="comment_input_wrapper">
                        <input class="dessert_additional_comment" type="text">
                    </div>
                </div>
                <div class="dessert_additional_basket_wrapper">
                    <div class="dessert_additional_basket_amount">
                        <i class="klik_amount_minus fa-solid fa-minus"></i>
                        <span class="amount">1</span>
                        <i class="klik_amount_plus fa-solid fa-plus"></i>
                    </div>
                    <button class="dessert_additional_basket" id = "add_to_shopping_cart">В корзину</button>
                </div>
            </div>
        </div>
        `;
    dessertContainer.insertAdjacentHTML('beforeend', productsHtml);

}

function getBundlesSelect(product) {
    if (!product.bundles || !Array.isArray(product.bundles) || product.bundles.length === 0) {
        return '';
    }

    let htmlBundle = '';
    htmlBundle += `<div class="additional_parameters">
                    <p class="name_options">Количество</p>
                    <div class="cake_weight_sel_wrapper">
                    <select id="bundles_select" class="cake_weight_sel">`;

    for (let i = 0; i < product.bundles.length; i++) {
        htmlBundle += `<option data-added-price="0" value="${product.bundles[i].name}">${product.bundles[i].name}</option>`
    }

    htmlBundle += `</select> </div> </div>`;
    return htmlBundle;
}

function getOptionsInHTMl(options) {

    if (Array.isArray(options) === false || !options) {
        return '';
    }

    let htmlStr = '';

    for (let i = 0; i < options.length; i++) {
        htmlStr += `<div class="additional_parameters">
                    <p class="name_options">${options[i].header}</p>
                    <div class="cake_weight_sel_wrapper">
                        <select class="cake_weight_sel" ${options[i].classes}" name="${options[i].selectName}">`;
        for (let j = 0; j < options[i].answers.length; j++) {
            htmlStr += `<option data-added-price="${options[i].answers[j].addedPrice ? options[i].answers[j].addedPrice : 0}" value="${options[i].answers[j].value}">${options[i].answers[j].text}</option>`;
        }
        htmlStr += `</select> </div> </div>`;
    }
    return htmlStr;
}

function getPrice(product, bundleIndex) {
    let price = product.price;

    if (!product.bundles || !Array.isArray(product.bundles) || product.bundles.length <= 0) {
        return price;
    }

    if (bundleIndex) {
        price = product.bundles[bundleIndex]?.price ?? price;
    } else {
        price = product.bundles[0].price
    }

    return price;
}

let amount = document.querySelector('.amount');
const klikAmountMinus = document.querySelector('.klik_amount_minus');
const klikAmountPlus = document.querySelector('.klik_amount_plus');
let dessertСost = document.querySelector('#dessert_cost');

klikAmountPlus.addEventListener('click', function () {
    amount.innerText = ++amount.innerText;
    updatePrice(amount.innerText);
})

klikAmountMinus.addEventListener('click', function () {
    if (parseInt(amount.innerText) > 1) {
        amount.innerText = --amount.innerText;
        updatePrice(amount.innerText);
    }
})


function isOkSelectOptions() { // нельзя добавить в корзину без выбранных опций
    const selects = document.querySelectorAll('.cake_weight_sel');
    for (let i = 0; i < selects.length; i++) {
        if (selects[i].options[selects[i].selectedIndex].value === '') {
            return false;
        }
    }
    return true;
}

function setCartCookie(product) {
    let jsCookie = JSON.stringify([product]);
    let cartMasiv = document.cookie.match(/cart=(.+?)(?=;|$)/g);
    if (!cartMasiv || cartMasiv.length === 0) {
        document.cookie = 'cart=' + jsCookie;
        console.log(document.cookie)
    } else {
        const cartUpdate = [];
        cartMasiv = JSON.parse(cartMasiv[0].split('=')[1]);

        for (let i = 0; i < cartMasiv.length; i++) {
            if (!cartMasiv[i]) continue;
            if (cartMasiv[i].name !== product.name) {
                cartUpdate.push(cartMasiv[i]);
            }
        }
        cartUpdate.push(product);
        document.cookie = 'cart=' + JSON.stringify(cartUpdate);
    }
}

function addToShoppingCart() {
    const basket = document.querySelector('#add_to_shopping_cart')

    basket.addEventListener('click', function () {
        if (!isOkSelectOptions()) {
            alert('Выберите все опции');
            return;
        }
        setCartCookie(getProductForCart());
        window.location.href = '/basket.html';
    })
}

addToShoppingCart()

document.addEventListener('change', function (evt) {
    if (evt.target.id === "bundles_select" || evt.target.classList.contains('cake_weight_sel')) {
        updatePrice(amount.innerText);
    }
});

function getBundleIndex(name) {
    let bundleIndex = -1;

    if (!product.bundles || !Array.isArray(product.bundles) || product.bundles.length <= 0) {
        return bundleIndex;
    }

    for (let i = 0; i < product.bundles.length; i++) {
        if (product.bundles[i].name === name) {
            bundleIndex = i;
            break;
        }
    }
    return bundleIndex;
}

function getCurrentBundleIndex() {
    const select = document.getElementById('bundles_select');
    let value = '';
    if (select) {
        value = select.value;
    }
    return getBundleIndex(value);
}

function getAddedPrice() {
    const els = document.querySelectorAll('.cake_weight_sel option');
    let addedPrice = 0;
    for (let i = 0; i < els.length; i++) {
        if (els[i].selected) {
            addedPrice += Number(els[i].dataset.addedPrice ?? 0);
        }
    }

    return addedPrice;
}

function updatePrice(count) {
    const total = count * (getPrice(product, getCurrentBundleIndex()) + getAddedPrice());
    dessertСost.innerText = total;
}


function getProductForCart() {
    const response = {
        name: '',
        img: '',
        price: 0,
        quantity: 0,
        options: []
    };
    const nameDessert = document.getElementById('name_dessert');
    if (nameDessert) {
        response.name = nameDessert.innerText;
    }
    const imgDes = document.querySelector('.img_des');
    if (imgDes) {
        response.img = imgDes.src;
    }
    const quantity = document.querySelector('.dessert_additional_basket_wrapper .amount');
    if (quantity) {
        response.quantity = Number(quantity.innerText);
    }
    const costEl = document.getElementById('dessert_cost');
    if (costEl) {
        response.price = Number(costEl.innerText) / quantity.innerText;
    }
    const optionsBlock = document.querySelectorAll('.additional_parameters');
    for (let i = 0; i < optionsBlock.length; i++) {
        let option = {
            name: '',
            price: 0,
            selected: '',
        }
        const elName = optionsBlock[i].querySelector('.name_options');
        const elSelect = optionsBlock[i].querySelector('.cake_weight_sel');

        option.name = elName.innerText;
        option.selected = elSelect.options[elSelect.selectedIndex].text;
        option.price = Number(elSelect.options[elSelect.selectedIndex].dataset.addedPrice);

        response.options.push(option);
    }
    return response;
}

function change_title () {
    document.title = product.name + ' • Лакомый кусочек';
}
change_title ()