export default class Building {
    constructor(canvas, x, y, width, height, color) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color
    }

    setBuilding() {
        this.ctx.fillStyle = this.color;
        this.ctx.shadowBlur = 0;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.strokeStyle = '#e6e1e1';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        this.#setLight();
    }

    #setLight() {
        const size = 7
        for(let i = this.x + size; i < this.x + this.width - size; i+=(size * 2.25)) {
            for(let j = this.y + size; j < this.y + this.height - size; j+=(size * 2.25)) {
                this.ctx.fillStyle = '#ffd358';
                this.ctx.fillRect(i, j, size, size);
            }
        }
    }
}