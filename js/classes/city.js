import Building from "./building.js";
import Person from "./person.js";
import { getRandomIntMinMax, getRandomInt } from "../utils/math.js";
import { jobs } from "../utils/data.js";

export default class City {
  constructor(canvas) {
    this.canvas = canvas;
    this.buildings = [];
    this.citizens = [];
    console.log(this.citizens);
  }

  setStreet(ctx) {
    const streetHeight = 100;
    ctx.fillStyle = "#3b3b3b";
    ctx.fillRect(
      0,
      this.canvas.height - streetHeight,
      this.canvas.width,
      streetHeight
    );
    for (let i = -10; i < this.canvas.width; i += 70) {
      ctx.fillStyle = "#f1e320";
      ctx.fillRect(i, this.canvas.height - 50, 50, 5);
    }
  }

  setBuildings() {
    const height = 275;
    let x = 0
    let y = this.canvas.height - height;
    const buildingCount = 16
    for (let i = 0; i < buildingCount; i++) {
      const randHeight = getRandomIntMinMax(50, 450)
      const building = new Building(
        x,
        y - randHeight,
        height + randHeight,
        "#0f0f0e"
      );
      x += 110;
      this.buildings.push(building);
    }
  }

  setCitizens() {
    const citizenCount = 100;
    for (let i = 0; i < citizenCount; i++) {
      const index = getRandomInt(jobs.length);
      const data = {
        fullName: "Peter Wagner",
        gender: "male",
        age: 38,
        job: jobs[index],
      };
      this.citizens.push(
        new Person(
          this.canvas,
          data,
          getRandomIntMinMax(1, 120),
          getRandomIntMinMax(-300, -10)
        )
      );
    }
  }
}
