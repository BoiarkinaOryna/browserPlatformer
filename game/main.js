// імпортуємо Sprite из папки модулес и файла sprite.js обовязково імпортуємо класс Sprite
import Sprite from "/modules/sprite.js"
// імпортуємо Hero из папки modules и файла hero.js обовязково імпортуємо класс Hero
import Hero from "/modules/hero.js"
// імпортуємо Rect из папки modules и файла rect.js обовязково імпортуємо класс Rect
import Rect from "/modules/rect.js"
//
import createMap from "./utils/createMap.js"
// 1 = Block
// 0 = (нічого)
// h = Hero

let listMap = [
    "0000000000".split(""),
    "0000000000".split(""),
    "0000000000".split(""),
    "0000h10000".split(""),
    "1111111111".split(""),
    "1111111111".split(""),
    "0000000000".split(""),
    "0000000000".split(""),
    "0000000000".split(""),
    "0000000000".split("")
]
console.log(listMap)

// let hero = createMap(listMap).at(1);
// let listElem = createMap(listMap).at(0);

//  let [listElem, hero] = [listElem, hero]
let [listElem, hero] = createMap(listMap);
//створюємо функцію, яка буде робити затримку та є рекурсивною (ігровий цикл)
function gameLoop() {
    console.log(9) //виводить 9 в консоль (заглушка)
    setTimeout(gameLoop,16.6) // робить затримку у завантаженні кількості кадрів в мілісекунду
}
// Викликаємо функцію
gameLoop()

// створюємо стрілочну функцію яка приєднує події до елемента при натисканні клавіши
document.addEventListener("keydown", (event) => {
    let key = event.code; // записуємо в змінну клавіши, якы були натиснуті 
    // Викликаємо рух "move", приймає "key"
    hero.move(key,listElem); //
})
// створюємо стрілочну функцію яка приєднує події до елемента при відпусканні клавіши
document.addEventListener("keyup", (event) => {
    // додаємо шлях для героя
    hero.IMG_PATH = `images/player/1.png`;
    // визначаємо адресу шляху героя
    hero.ELEMENT.src = hero.IMG_PATH;
})
