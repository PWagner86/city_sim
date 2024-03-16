import { getRandomIntMinMax } from "../utils/math.js";

export default class Person {
    constructor(canvas, personData, speed, posX) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
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

    drawPerson() {
        const posY = this.canvas.height - 100;
        // head
        this.ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
        this.ctx.beginPath();
        this.ctx.arc(this.posX + 5, posY - 25, 5, 0, Math.PI * 2 );
        this.ctx.fill();
        // body
        this.ctx.fillStyle = `rgb(${this.green}, ${this.blue}, ${this.red})`;
        this.ctx.fillRect(this.posX, posY - 20, 9, 10);
        // legs
        this.ctx.fillStyle = `rgb(${this.blue}, ${this.red}, ${this.green})`;
        this.ctx.fillRect(this.posX, posY - 10, 3.5, 10);
        this.ctx.fillRect(this.posX + 5, posY - 10, 3.5, 10);
    }

    walk() {
        this.posX += this.speed;
        if(this.posX > this.canvas.width + 200) this.speed *= -1;
        if(this.posX < -200) this.speed *= -1;
    }
}