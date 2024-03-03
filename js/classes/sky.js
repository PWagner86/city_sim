import { getRandomIntMinMax } from "../utils/math.js";

export default class Sky {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
    }

    initSky() {
        this.#setSkyColor();
        this.#setStars();
        this.#setSun();
        this.#setMoon();
    }

    #setSkyColor(skyColor = '#79aff0') {
        this.canvas.style.backgroundColor = skyColor;
    }

    #setSun() {
        this.ctx.beginPath();
        this.ctx.fillStyle = '#e2cb47';
        this.ctx.arc(this.canvas.width - 100, 100, 50, 0, Math.PI * 2);
        this.ctx.fill();
    }

    #setMoon() {
        this.ctx.beginPath();
        this.ctx.fillStyle = '#becde2';
        this.ctx.arc(100, 100, 50, 0, Math.PI * 2)
        this.ctx.fill();
    }

    #setStars(starCount = 100) {
        const size = 2;
        for(let i = 0; i <= starCount; i++) {
            const x = getRandomIntMinMax(0 + size, this.canvas.width - size);
            const y = getRandomIntMinMax(0 + size, this.canvas.height - size);
            this.ctx.beginPath();
            this.ctx.fillStyle = '#ffffff'
            this.ctx.arc(x, y, size, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

}