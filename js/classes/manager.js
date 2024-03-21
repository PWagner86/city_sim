import Sky from './sky.js';
import Clock from './clock.js';
import City from './city.js';

export default class Manager {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.clock = new Clock();
        this.hour = this.clock.getDateData().hour;
        this.time = this.clock.getDateData();
        this.sky = new Sky(this.canvas, this.time);
        this.city = new City(this.canvas);
        this.lastTime = 0
    }

    init() {
        console.log('Start Sim');
        this.clock.getDate();
        this.sky.initSky(this.hour, this.ctx);
        this.city.setStreet(this.ctx)
        this.city.setBuildings(this.ctx);
        this.city.setCitizens();
        this.animate(0);
    }

    animate() {
        requestAnimationFrame((t) => {
            const deltaTime = t - this.lastTime;
            this.lastTime = t
            this.hour = this.clock.getDateData().hour;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.sky.initSky(this.hour, this.ctx);
            this.city.setStreet(this.ctx);
            this.city.setBuildings(this.ctx);
            this.city.citizens.forEach( citizen => {
                citizen.drawPerson(this.ctx);
                citizen.walk();
            });
            this.animate();
        });
    }
}