export default class Skyobject {
  constructor(x, y, size = 50, color = "#e2cb47") {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.size = size;
    this.color = color;
  }

  setSkyObject(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 20;
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  moveDown(height) {
    this.y += this.speed;
    if (this.y > height) this.y = height;
  }

  moveUp() {
    this.y -= this.speed;
    if (this.y < 100) this.y = 100;
  }
}
