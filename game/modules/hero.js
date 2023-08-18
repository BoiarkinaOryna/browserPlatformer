// імпоруємо клас Sprite
import Sprite from "/modules/sprite.js"
import Rect from "./rect.js";
// створюємо клас Hero, який наслідує Sprite
class Hero extends Sprite{
    // передаємо параметри координат, розмірів, шляху до картинки(src) кольору та назви тега, який потім буде у index.html
    constructor(x,y,width,height,imgPath = undefined,color = undefined,tagName="div"){
        // ініціалізуємо параметри, які ми наслідуємо зі Sprite
        super(x,y,width,height,imgPath,color,tagName)
        // задаємо ширину героя
        this.ELEMENT.style.width = `${this.WIDTH}px` ;
        // 
        this.RECT = new Rect(x,y,width,height,this.ELEMENT)
        // задаємо висоту героя
        this.ELEMENT.style.height = `${this.HEIGHT}px`;
        // створюємо умову if та у дужки передаємо imgPath, щоб показати, що унас є шлях до малюнка, та малюнок буде виводитися на екран
        if (imgPath != undefined) {
            this.ELEMENT.src = this.IMG_PATH;
        }
        //додаємо елемент до body
        document.body.append(this.ELEMENT)

        
        this.IMG_NUM = 4  //встановлюємо 4 картинку з якої починається рух
        this.ELEMENT.style.position = "absolute"; // встановлюємо абсолютне позіціювання для зміни кординат
    }
    animation(){
        // Створюємо умову перемикання картинок при русі
        // Щоб не було помилки коли номер картинки стає більшим ніж у нас є
        // Або вона не перемикалась на картинку з анімацією стрибка
        console.log(this.IMG_NUM)
        if (this.IMG_NUM >= 8){
            // Повертає початкову картинку
            this.IMG_NUM = 4;
        }
        
        //додаємо 1 до номера картинки
        this.IMG_NUM++; 
        //змінюємо шлях, включаючи до нього картинку з новим номером
        this.IMG_PATH = `images/player/${this.IMG_NUM}.png`; 
        //присвоюємо новий шлях елемента до його src
        this.ELEMENT.src = this.IMG_PATH;
    }
    move(key,listElem){
        let moveRight = this.RECT.collisionRight(listElem,this.RECT.getRect(this.ELEMENT))
        console.log(moveRight)
        // створюємо умову для руху праворуч

        if ( key == "KeyD"){

            // Видаляємо клас 
            this.ELEMENT.classList.remove("left")
            // Додаємо рух вправо для цього елемента
            this.ELEMENT.classList.add("right")
            // Змінюємо х персонажу
            this.X += 3;
            
            //Змінюємо відступ на екрані
            this.ELEMENT.style.left = `${this.X}px`;
            // Викликаємо метод, що відповідає за анімацію
            this.animation();
        }
        // Створюємо умову для руху ліворуч
        if ( key == "KeyA"){
            // Вилучаємо клас .right 
            this.ELEMENT.classList.remove("right")
            // Додаємо клас .left к елементу
            this.ELEMENT.classList.add("left")
            // Змінюємо х персонажу
            this.X -= 3;
            // Змінюємо відступ на екрані 
            this.ELEMENT.style.left = `${this.X}px`;
            // Викликаємо метод, що відовідає за анімацію
            this.animation();
        }
    }
}
// 
export default Hero