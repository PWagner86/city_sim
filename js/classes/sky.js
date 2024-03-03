import { getRandomIntMinMax } from "../utils/math.js";
import Skyobject from "./skyobject.js";

export default class Sky {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.sun = new Skyobject(this.canvas.width - 100, 100, 50, '#e2cb47');
        this.moon = new Skyobject(100, 100, 50, '#d5e0ff');
        this.stars = [];
    }

    initSky() {
        this.#setSkyColor();
        this.#setStars();
        console.log(this.stars);
        this.sun.setSkyObject(this.ctx);
        this.moon.setSkyObject(this.ctx);
    }

    #setSkyColor(skyColor = '#79aff0') {
        this.canvas.style.backgroundColor = skyColor;
    }

    #setStars(starCount = 100) {
        const size = 2;
        for(let i = 0; i < starCount; i++) {
            const x = getRandomIntMinMax(0 + size, this.canvas.width - size);
            const y = getRandomIntMinMax(0 + size, this.canvas.height - size);
            const star = new Skyobject(x, y, size, '#ffffff');
            this.stars.push(star);
            star.setSkyObject(this.ctx);
        }
    }

}