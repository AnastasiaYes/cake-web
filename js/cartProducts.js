export function countingTheNumberOfItemsInTheCart() { // подсчет кол-во товара в корзине
    let number = document.querySelector('.number_of_selected_items');

    if (!number) {
        return
    }

    const productsQuantity = getCartProducts().length;
    number.innerText = productsQuantity;

    if (productsQuantity > 0 && number.classList.contains('d-none')) {
        number.classList.remove('d-none');
    } else if (productsQuantity === 0 && !number.classList.contains('d-none')) {
        number.classList.add('d-none');
    }
}
countingTheNumberOfItemsInTheCart()

/**
 * Возвращает массив объектов(товаров) в корзине
 */

export function getCartProducts() {
    const cart = document.cookie.match(/cart=(.+?)(?=;|$)/g);
    if (!cart || cart.length === 0) {
        return [];
    }
    return JSON.parse(cart[0].split('=')[1]);

}