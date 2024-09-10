const cv = document.querySelector("canvas");
const ctx = cv.getContext("2d");

cv.width = window.innerWidth;
cv.height = window.innerHeight;

class Symbol {

    constructor(i, j, fontSize, canvasHeight, context) {

        this.characters = '0123456789';

        this.i = i;
        this.j = j;
        this.context = context;
        this.fontSize = fontSize;
        this.context.font = fontSize + 'px monospace'; // monospace so all characters use the same space
        this.canvasHeight = canvasHeight;

        this.text = '';

        
    }

    draw() {

        const pos = Math.floor(Math.random() * this.characters.length);

        this.text = this.characters.charAt(pos);

        const x = this.i * this.fontSize;
        const y = this.j * this.fontSize;

        this.context.fillText(
            this.text,
            x, y
        )

        if (y > this.canvasHeight && Math.random() > 0.98) { // the second term to randomize when the column is reset
            this.j = 0;
        } else {
            this.j++;
        }


    }

}

class Effect {

    constructor(canvasWidth, canvasHeight) {

        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.fontSize = 25;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();

    }

    resize(canvasWidth, canvasHeight) {

        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();

    }

    #initialize() {

        // private method

        for (let i = 0; i < this.columns; i++) {
            
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight, ctx);
            

        }

    }


}

const effect = new Effect(cv.width, cv.height);

let anim;

let lastTime = 0;
let timer = 0;
const fps = 15;
const nextFrame = 1000 / fps; // 1000ms/30fps
console.log(nextFrame);

function animate(timeStamp) {

    const deltaTime = timeStamp - lastTime;

    lastTime = timeStamp;

    if (timer > nextFrame) {

        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, cv.width, cv.height);
        ctx.fillStyle = "green";
        effect.symbols.forEach(s => s.draw(ctx));
        timer = 0;

    } else {

        timer += deltaTime;

    }

    anim = requestAnimationFrame(animate); // this creates the animation loop.

}

animate(0);

// 

window.addEventListener("resize", function() {
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
    effect.resize(cv.width, cv.height);
    console.log(cv.width, cv.height);
})

//

const stopBTN = document.querySelector("#btn-stop");
stopBTN.addEventListener("click", function() {
    cancelAnimationFrame(anim);
})