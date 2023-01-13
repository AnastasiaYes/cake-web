import {getProducts} from './getProducts.js';

window.addEventListener('load', function () {
    let catalogElements = document.querySelectorAll('.cakes_catalog[data-category]'); //div[]

    for (let i = 0; i < catalogElements.length; i++) {
        let stCategory = catalogElements[i].dataset.category;
        let catalogEl = catalogElements[i].querySelector('.catalog'); //div
        let filteredProducts = searchProductsByCategory(stCategory);
        renderProducts(filteredProducts, catalogEl);
    }
    scrollOnLoad()
});

function searchProductsByCategory(category) {
    const products = getProducts();

    let filteredProducts = [];
    if (category === 'sale') {
        filteredProducts = products.filter(product => product.sale === true);
    } else {
        for (let i = 0; i < products.length; i++) {
            if (typeof products[i].category === 'object') { //обрабатываем category как массив
                for (let j = 0; j < products[i].category.length; j++) { //проходимся по каждому элементу массиву category
                    if (products[i].category[j] === category) { // сравниваем каждый элемент массива со строкой из html атрибута data-category
                        filteredProducts.push(products[i])
                    }
                }
            } else {//обрабатываем category как строку
                if (products[i].category === category) {
                    filteredProducts.push(products[i])
                }
            }
        }
    }

    return filteredProducts;
}

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


function scrollOnLoad() {
    let anc = window.location.hash;
    anc = anc.substring(1);
    let el = document.getElementById(anc);
    if (el == null) {
        return;
    }
    setTimeout(() => {
        scrollTo(document.documentElement, el.offsetTop, 600)
    }, 150)
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    let difference = to - element.scrollTop;
    let perTick = difference / duration * 10;

    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

