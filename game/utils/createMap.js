import Sprite from "../modules/sprite.js"
import Hero from "../modules/hero.js"

function createMap(listMap){
    const listElem = [];
    let x = 0;
    let y = 0;
    let hero;

    for (let row of listMap){
      for (let cell of row){
        if (cell == "1"){
          let block = new Sprite(
            x, y, 
            100, 100, 
            "../images/block.png",
            undefined,
            "img"
          );

          listElem.push(block);
        } else if (cell == "h"){
            hero = new Hero(x, y, 100, 100,
              // путь к картинке класса hero.
              "/images/player/1.png",
              // цвет класса hero.
              undefined,
              // тег класса hero.
              "img"
            );
        }
        x += 100;
      };
      y += 100;
      x = 0;
    };
  return [listElem, hero]
}

export default createMap