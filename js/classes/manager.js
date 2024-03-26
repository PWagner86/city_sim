import Sky from "./sky.js";
import Clock from "./clock.js";
import City from "./city.js";

export default class Manager {
  constructor(canvas, ctx, main) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.main = main;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.clock = new Clock();
    this.hour = this.clock.getDateData().hour;
    this.time = this.clock.getDateData();
    this.sky = new Sky(this.canvas, this.time);
    this.city = new City(this.canvas);
    this.lastTime = 0;
    this.citizenList = document.querySelector('[data-id="citizen-list"]');

    window.addEventListener("resize", (e) => {
      this.resize(this.main.clientWidth, this.main.clientHeight);
    });
  }

  init() {
    console.log("Start Sim");
    this.clock.getDate();
    this.sky.initSky(this.hour, this.ctx);
    this.city.setStreet(this.ctx);
    this.city.setBuildings(this.ctx);
    this.city.setCitizens();
    this.#getCitizenList();
    this.animate(this.ctx);
  }

  #getCitizenList() {
    this.city.citizens.forEach((citizen) => {
      const item = document.createElement("li");
      item.classList.add("citizen-list-item");
      item.innerHTML = `
        <p><span>Name:</span> ${citizen.fullName}</p>
        <p><span>Alter:</span> ${citizen.age}</p>
        <p><span>Job:</span> ${citizen.job.jobName}</p>
      `;
      this.citizenList.append(item);
    });
  }

  animate() {
    requestAnimationFrame((t) => {
      const deltaTime = t - this.lastTime;
      this.lastTime = t;
      this.hour = this.clock.getDateData().hour;
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.sky.initSky(this.hour, this.ctx);
      this.city.buildings.forEach((building) => building.setBuilding(this.ctx));
      this.city.setStreet(this.ctx);
      this.city.citizens.forEach((citizen) => {
        citizen.drawPerson(this.ctx);
        citizen.walk();
      });
      this.animate();
    });
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = width;
    this.height = height;
    this.sky.initSky(this.hour, this.ctx);
    this.city.setStreet(this.ctx);
    this.city.buildings.forEach((building) => building.setBuilding(this.ctx));
    this.city.citizens.forEach((citizen) => {
      citizen.drawPerson(this.ctx);
      citizen.walk();
    });
  }
}
