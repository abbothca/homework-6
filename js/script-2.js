"use strict";

function recursiveOddSumTo(number) {
    if (number < 1) {
        return 0;
    };
    return (number % 2) ? number + recursiveOddSumTo(number - 1) : recursiveOddSumTo(number - 1);
};

// Перевіряємо результати роботи коду
const arrayOfValues = [1, 3, 9, 10];  // масив значень, які хочу перевірити

for (let item of arrayOfValues) {                                               // Проганяю цикл по всіх елементах
    console.log("recursiveOddSumTo(", item, ") = ", recursiveOddSumTo(item));     // Виводжу в консоль результати
};