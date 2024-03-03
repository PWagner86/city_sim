export default class Skyobject {
    constructor(x, y, size = 50, color = '#e2cb47') {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    setSkyObject(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}