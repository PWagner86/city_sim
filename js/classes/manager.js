import Sky from './sky.js';

export default class Manager {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.sky = new Sky(this.canvas);
    }

    init() {
        console.log('Start Sim');
        this.sky.initSky(this.canvas);
    }
}