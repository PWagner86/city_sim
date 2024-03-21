import { getRandomIntMinMax } from "../utils/math.js";

export default class Person {
    constructor(canvas, personData, speed, posX) {
        this.canvas = canvas;
        this.fullName = personData.fullName
        this.gender = personData.gender;
        this.age = personData.age;
        this.job = personData.job;
        this.posX = posX;
        this.speed = Math.random(speed) + 0.1;
        this.red = getRandomIntMinMax(0, 255);
        this.green = getRandomIntMinMax(0, 255);
        this.blue = getRandomIntMinMax(0, 255);
    }

    drawPerson(ctx) {
        const posY = this.canvas.height - 100;
        // head
        ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
        ctx.beginPath();
        ctx.arc(this.posX + 5, posY - 25, 5, 0, Math.PI * 2 );
        ctx.fill();
        // body
        ctx.fillStyle = `rgb(${this.green}, ${this.blue}, ${this.red})`;
        ctx.fillRect(this.posX, posY - 20, 9, 10);
        // legs
        ctx.fillStyle = `rgb(${this.blue}, ${this.red}, ${this.green})`;
        ctx.fillRect(this.posX, posY - 10, 3.5, 10);
        ctx.fillRect(this.posX + 5, posY - 10, 3.5, 10);
    }

    walk() {
        this.posX += this.speed;
        if(this.posX > this.canvas.width + 200) this.speed *= -1;
        if(this.posX < -200) this.speed *= -1;
    }
}