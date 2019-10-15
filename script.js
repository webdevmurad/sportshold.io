const cards = document.querySelectorAll('.goods-blocks .goods-sneakers'),
    cartWrapper = document.querySelector('.modal-wrap'),
    cartEmpty = document.querySelector('.modal-text'),
    countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn = card.querySelector('.goods-button__buy');
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.goods-sneakers'),
        cardsPrice = cartWrapper.querySelectorAll('.price'),
        cardTotal = document.querySelector('.price-span');
    let sum = 0;
    countGoods.textContent = cardsCart.length;

    cardsPrice.forEach((cardPrice) => {
        let price = parseFloat(cardPrice.textContent);
        console.log(price);
        sum += price;

    });
    cardTotal.textContent = sum;
}

    



