export default class Skyobject {
    constructor(canvas, x, y, size = 50, color = '#e2cb47') {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.speed = 1;
        this.size = size;
        this.color = color;
    }

    setSkyObject() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }

    moveDown() {
        this.y += this.speed;
        if (this.y > this.canvas.height) this.y = this.canvas.height;
    }
    
    moveUp() {
        this.y -= this.speed;
        if (this.y < 100) this.y = 100;
    }

}