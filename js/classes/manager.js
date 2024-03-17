import Sky from './sky.js';
import Clock from './clock.js';
import City from './city.js';

export default class Manager {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.clock = new Clock();
        this.time = this.clock.getDateData();
        this.sky = new Sky(this.canvas, this.time);
        this.city = new City(this.canvas);
    }

    init() {
        console.log('Start Sim');
        this.clock.getDate();
        this.sky.initSky();
        this.city.setStreet()
        this.city.setBuildings();
        this.city.setCitizens();
        this.animate();
    }

    animate() {
        requestAnimationFrame((t) => {
            const clock = this.clock.getDateData();
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.sky.initSky(clock.hour);
            this.city.setStreet();
            this.city.setBuildings();
            this.city.citizens.forEach( citizen => {
                citizen.drawPerson();
                citizen.walk();
            })
            this.animate();
        });
    }
}