import { getRandomIntMinMax, getRandomInt } from "../utils/math.js";

export default class Building {
  constructor(x, y, height, color) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = height;
    this.color = color;
  }

  setBuilding(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = "#e6e1e1";
    ctx.lineWidth = 2;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.#setLight(ctx);
  }

  #setLight(ctx) {
    const size = 7;
    for (
      let i = this.x + size;
      i < this.x + this.width - size;
      i += size * 2.25
    ) {
      for (
        let j = this.y + size;
        j < this.y + this.height - size;
        j += size * 2.25
      ) {
        ctx.fillStyle = "#ffd358";
        ctx.fillRect(i, j, size, size);
      }
    }
  }
}
