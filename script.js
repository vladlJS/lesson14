'use strict';

class DomElement{
    constructor(selector, height, width, bg, fontSize){
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    };
    block(){
        if (this.selector.indexOf('.') === 0) {
            console.log('Создан div');
            const block = document.createElement('div');
            block.className = "block";
            block.style.width = this.width;
            block.style.height = this.height;
            block.style.backgroundColor = this.bg;
            block.style.fontSize = this.fontSize;
            block.textContent = 'Создан div с текстом';
            document.body.appendChild(block);
        } else if (this.selector.indexOf('#') === 0) {
            console.log('Создан параграф');
            const block2 = document.createElement('p');
            block2.id = "test";
            block2.textContent = 'Создан параграф с текстом';
            document.body.appendChild(block2);
        } else {
            console.log('Error');
        }
    }
};

// DomElement.prototype.create = function(){

// };

let domElement1 = new DomElement('.block', '300px', '300px', 'red', '50px');
console.log(domElement1);
domElement1.block();