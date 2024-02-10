"use strict";

//Допоміжна рекурсивна функція, яка рахує кількість входжень substring в string
function countSymbol(string, substring) {
    let indexFirstOccurrence = string.indexOf(substring);  //обчислюємо індекс першого входження
    if (indexFirstOccurrence === -1) {                     //точка зупинки рекурсії
        return 0;                                //повертаємо 0, якщо входжень нема
    };

    return 1 + countSymbol(string.substring(indexFirstOccurrence + 1), substring); //самовиклик, де замість вхідного рядка передаємо підрядок від першого входження і до кінця 

}

// Функція, яка порівнюватиме кількість входжень символів х і о
const isXOEqual = (str) => {
    return (countSymbol(str.toLowerCase(), "x") === countSymbol(str.toLocaleLowerCase(), "o"));  //якщо кількість входжень х рівня кількості входжень о - повертаємо true, інакше false
        //передаємо в допоміжну фукнцію рядок, переведений в нижній регістр, щоб функція була регістронечутливою
}


// Перевіряємо результати роботи коду
const arrayOfValues = ["", "ooxx", "xooxx", "ooxXm", "zpzpzpp", "zzoo"];  // масив значень, які хочу перевірити

for (let item of arrayOfValues) {                                               // Проганяю цикл по всіх елементах
    console.log("isXOEqual(", item, ") = ", isXOEqual(item));     // Виводжу в консоль результати
};