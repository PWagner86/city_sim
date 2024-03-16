import { getRandomIntMinMax } from "../utils/math.js";
import Skyobject from "./skyobject.js";

export default class Sky {
    constructor(canvas, time) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.time = time;
        this.sunPos = 0;
        this.moonPos = 0
        this.evening = 17;
        this.morning = 6;

        if(this.time.hour >= this.evening) this.sunPos = this.canvas.height;
        if(this.time.hour >= this.morning) this.moonPos = this.canvas.height;

        this.sun = new Skyobject(this.canvas, this.canvas.width - 100, this.sunPos, 50, '#e2cb47');
        this.moon = new Skyobject(this.canvas, 100, this.moonPos, 50, '#d5e0ff');
        this.stars = [];
        this.#setStars();
    }

    initSky() {
        const hour = this.time.hour
        this.#setSkyColor();
        this.sun.setSkyObject();
        this.moon.setSkyObject();
        if(hour >= 17) {
            this.stars.forEach( star => star.setSkyObject())
            this.sun.moveDown();
            this.moon.moveUp();
        } else if(hour >= 6) {
            this.sun.moveUp();
            this.moon.moveDown();
        }
    }

    #setSkyColor(skyColor = '#79aff0') {
        this.canvas.style.backgroundColor = skyColor;
    }

    #setStars(starCount = 100) {
        const size = 2;
        for(let i = 0; i < starCount; i++) {
            const x = getRandomIntMinMax(0 + size, this.canvas.width - size);
            const y = getRandomIntMinMax(0 + size, this.canvas.height - size);
            const star = new Skyobject(this.canvas, x, y, size, `#ffffff`);
            this.stars.push(star);
        }
    }
}