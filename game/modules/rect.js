import Sprite from "/modules/sprite.js" // імпортуємо Sprite 

class Rect{
// передаємо властивості: кординати,ширина,висота,шлях до картинки, колір 
    constructor (x,y,width,height,element) {
        this.X = x
        this.Y = y
        this.MOVE_RIGHT = true
        this.HEIGHT = height
        this.WIDTH = width
        this.ELEMENT = element
        this.RECT = this.getRect(this.ELEMENT) // отримано з getRect
    }
// Створюємо метод "getRect" для повернення властивостей
    getRect(element) {
      // Отримуємо "ELEMENT"
      // console.log(element)
        let box = element.getBoundingClientRect();
        return {
          // Повертаємо властовості: 'право, ліво, верх, низ'
            right: box.right,
            left: box.left,
            top: box.top,
            bottom: box.bottom
        }
    }
    collisionRight(listElem, rect){
      for (let elem of listElem){
		let rectElem = this.getRect(elem.ELEMENT);
			// Здесь одна проблема
		if (rect.bottom >= rectElem.top && rect.top > rectElem.bottom){
			// Здесь две проблемы
			if (rect.left >= rectElem.right && rect.right < rectElem.left){
                this.MOVE_RIGHT = true
                break
			}
			else{
                this.MOVE_RIGHT = false
			}
		}
		else{
			this.MOVE_RIGHT = false
		}
	}
	return this.MOVE_RIGHT
    }
}
// Єкспортуємо объект "Rect"
export default Rect