'use strict'
/*Мережа фастфудів пропонує кілька видів гамбургерів:

маленький (50 тугриків, 20 калорій);
великий (100 тугриків, 40 калорій).
Гамбургер може бути з одним із декількох видів начинок:

сиром (+ 10 тугриків, + 20 калорій);
салатом (+ 20 тугриків, + 5 калорій);
картоплею (+ 15 тугриків, + 10 калорій).
Можна додати добавки:

посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

Приклад роботи коду:

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(“Calories: “ + hamburger.calculate ());

// скільки коштує
console.log("Price: “ + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: “ + hamburger.calculatePrice());*/

const SIZE_SMALL = 'small';
const SIZE_BIG = 'big';
const STUFFING_CHEESE = 'cheese';
const STUFFING_SALAD = 'salad';
const STUFFING_POTATO = 'potato';
const TOPPING_MAYO = 'mayo';
const TOPPING_SAUSE = 'sause';

class Hamburger{
    //конструктор бургера(розмір, начинка та масив для додавання топінгів)
    constructor(size, stuffing){
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    //метод для додавання топінгу
    addTopping(topping){
        this.toppings.push(topping);
    }

    // калькулятор ціни
    calculatePrice(){
        let price = 0;
        switch(this.size){
            case SIZE_SMALL:
            price += 50;
            break;

            case SIZE_BIG:
            price += 100;
            break;
        }

        switch(this.stuffing){
            case STUFFING_CHEESE:
            price += 10;
            break;

            case STUFFING_SALAD:
            price += 20;
            break;

            case STUFFING_POTATO:
            price += 15;
            break;
        }

        //прохід по масиву для додавання ціни топінгу
        this.toppings.forEach(topping => {
            switch(topping){
                case TOPPING_MAYO:
                price += 20;
                break;

                case TOPPING_SAUSE:
                price += 15;
                break;
            }
        });

        return price;
    }

    // калькулятор калорій 
    calculateCalories(){
        let calories = 0;
        switch(this.size){
            case SIZE_SMALL:
            calories += 20;
            break;

            case SIZE_BIG:
            calories += 40;
            break;
        }

        switch(this.stuffing){
            case STUFFING_CHEESE:
            calories += 20;
            break;

            case STUFFING_SALAD:
            calories += 5;
            break;

            case STUFFING_POTATO:
            calories += 10;
            break;
        }
        //прохід по масиву для додавання калорійності топінгу
        this.toppings.forEach(topping =>{
            switch(topping){
                case TOPPING_MAYO:
                calories += 5;
                break;

                case TOPPING_SAUSE:
                calories += 0;
                break;
            }
        });

        return calories;

    }
}
// маленький гамбургер з начинкою сиру
var hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
//добавка з майонезом
hamburger.addTopping(TOPPING_MAYO);
// запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculateCalories()}`);
// скільки коштує
console.log(`Price: ${hamburger.calculatePrice()}`);
// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(TOPPING_SAUSE);
// А скільки тепер коштує?
console.log(`Price with sause: ${hamburger.calculatePrice()}`);