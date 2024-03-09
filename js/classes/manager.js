import Sky from './sky.js';
import Clock from './clock.js';
import City from './city.js';

export default class Manager {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.sky = new Sky(this.canvas);
        this.clock = new Clock();
        this.city = new City(this.canvas);
    }

    init() {
        console.log('Start Sim');
        this.clock.getDate();
        this.sky.initSky();
        this.city.setStreet()
        this.city.setBuildings();
        this.city.setCitizens();
    }

    animate() {
        requestAnimationFrame(() => {
            this.animate();
            
        });
    }
}