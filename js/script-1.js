"use strict";

// Функція, яка обчислює суму непарних чисел, менших за number
function iterativeOddSumTo(number) {//для додатніх значень рахуємо суму
        let sum = 0;

        for (let i = 1; i <= number; i++) {          //лічильник з 1, бо натуральні числа йдуть з 1
            sum += (i % 2) ? i : 0;                 //на кожній ітерації збільшуємо суму на значення лічильника, якщо число непарне, або на 0, якщо парне
        }

        return sum;                                 //повертаємо значення суми для додатніх значень number
};


// Перевіряємо результати роботи коду
const arrayOfValues = [null, NaN, undefined, -4, 1, 3, 9, 10];  // масив значень, які хочу перевірити

for (let item of arrayOfValues) {                                               // Проганяю цикл по всіх елементах
    console.log("iterativeOddSumTo(", item, ") = ", iterativeOddSumTo(item));     // Виводжу в консоль результати
};