import { getRandomIntMinMax } from "../utils/math.js";
import Skyobject from "./skyobject.js";

export default class Sky {
  constructor(canvas, time) {
    this.canvas = canvas;
    this.time = time;
    this.sunPos = 0;
    this.moonPos = 0;
    this.evening = 18;
    this.morning = 6;
    this.hue = 71;
    this.stars = [];
    this.#setStars();

    if (this.time.hour >= this.morning) this.moonPos = this.canvas.height;
    if (this.time.hour >= this.evening) this.sunPos = this.canvas.height;

    this.sun = new Skyobject(
      this.canvas.width - 100,
      this.sunPos,
      50,
      "#e2cb47"
    );
    this.moon = new Skyobject(100, this.moonPos, 50, "#d5e0ff");
  }

  initSky(hour, ctx) {
    this.#setDayNight(hour);
    this.sun.setSkyObject(ctx);
    this.moon.setSkyObject(ctx);
    if (hour >= this.evening) {
      this.stars.forEach((star) => star.setSkyObject(ctx));
      this.sun.moveDown();
      this.moon.moveUp();
    } else if (hour >= this.morning) {
      this.sun.moveUp();
      this.moon.moveDown(this.canvas.height);
    }
  }

  #setSkyColor(skyColor = "#79aff0") {
    this.canvas.style.backgroundColor = skyColor;
  }

  #setStars(starCount = 100) {
    const size = 2;
    for (let i = 0; i < starCount; i++) {
      const x = getRandomIntMinMax(0 + size, this.canvas.width - size);
      const y = getRandomIntMinMax(0 + size, this.canvas.height - size);
      const star = new Skyobject(x, y, size, `#ffffff`);
      this.stars.push(star);
    }
  }

  #setDayNight(hour) {
    const hueCount = 0.1;
    if (hour >= this.evening) {
      this.hue -= hueCount;
      if (this.hue <= 10) this.hue = 10;
    } else if (hour >= this.morning) {
      this.hue += hueCount;
      if (this.hue >= 71) this.hue = 71;
    }
    this.#setSkyColor(`hsl(213, 80%, ${this.hue}%)`);
  }
}
