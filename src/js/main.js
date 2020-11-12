class Card {
    constructor() {
        this.productsList = document.getElementById('productsList')

        this.json = [{
            id: '1',
            image: 'img/1.png',
            title: 'Шампунь',
            description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                ' Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            price: ' 200грн'
        }, {
            id: '2',
            image: 'img/2.jpg',
            title: 'Шампунь',
            description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                ' Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            price: ' 200грн'
        }, {
            id: '3',
            image: 'img/3.jpg',
            title: 'Шампунь',
            description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                ' Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            price: ' 200грн'
        }];
    }

    render() {
        this.renderCard = this.json.map((data) => {
            return `<div class="card">
                    <header class="card__header">
                        <span class="card__new button">new</span>
        
                        <div class="card__border">
                            <div class="card__image-wrapper">
                                <img class="card__image" src=${data.image}>
                            </div>
                        </div>
        
                        <div class="card__icon">
                        <i class="fa fa-balance-scale" aria-hidden = 'true'></i>
                        </div>
                    </header>
        
                    <article class="product">
                        <h3 class="product__title">${data.title}</h3>
                        <p class="product__description">
                            ${data.description}
                        </p>
        
                        <form class="product__form">
                            <div class="product__flex-row">

                                <select class="product__select">
                                    <option class="product__option" selected disabled>Цвет</option>
                                    <option class="product__option" value='yellow'>Желтый</option>
                                    <option class="product__option" value='red'>Красный</option>
                                    <option class="product__option" value='green'>Зеленый</option>
                                </select>
   
                                <span class="product__price"> ${data.price}</span>
                            </div>
        
                            <div class="radio">
                                <label class="radio__button">
                                    <input class="radio__input" name="volume" type="radio" value="firstVolume" checked>
                                    <span class="radio__item">100мл</span>
                                </label>
        
                                <label class="radio__button">
                                    <input class="radio__input" name="volume" type="radio" value="secondVolume">
                                    <span class="radio__item">200мл</span>
                                </label>
        
                                <label class="radio__button">
                                    <input class="radio__input" name="volume" type="radio" value="thirdVolume">
                                    <span class="radio__item">300мл</span>
                                </label>
                            </div>
        
                            <div class="buttons-block">
        
                                <div class="counter">
                                    <input class="counter__button button-count-minus" type="button" value="-">
                                    <div class="count-number"> 1</div>
                                    <input class="counter__button button-count-plus" type="button" value="+">
                                </div>
        
                                <button class="button button--hovered product__button" type="submit"
                                        value="submit">Купить
                                </button>
                            </div>
                        </form>
                    </article>
                </div>`
        })
        this.productsList.innerHTML = `${this.renderCard}`;
    }
}

const card = new Card()
card.render()

const productsList = document.getElementById('productsList')

productsList.addEventListener('click', (e) => {
    const target = e.target;
    const count = target.parentNode.querySelector(".count-number");

    if (target.classList.contains('button-count-plus')) {
        const countPlus = count.innerHTML;
        if (+countPlus < 5) {
            count.innerHTML++;
        }
    }

    if (target.classList.contains('button-count-minus')) {
        const countMinus = count.innerHTML;
        if (+countMinus >= 2) {
            count.innerHTML--;
        }
    }
})
