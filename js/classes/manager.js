import Sky from './sky.js';
import Clock from './clock.js';
import City from './city.js';

export default class Manager {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.sky = new Sky(this.canvas);
        this.clock = new Clock();
        console.log(this.clock.setRealTime())
        this.city = new City(this.canvas);
    }

    init() {
        console.log('Start Sim');
        this.sky.initSky(this.canvas);
        this.city.setStreet()
        this.city.setBuildings();
    }
}