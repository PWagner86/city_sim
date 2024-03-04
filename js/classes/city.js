import Building from "./building.js";
import { getRandomIntMinMax, getRandomInt } from "../utils/math.js";

export default class City {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.buildings = [];
    }

    setStreet() {
        const streetHeight = 100
        this.ctx.fillStyle = '#3b3b3b';
        this.ctx.fillRect(0, this.canvas.height - streetHeight,  this.canvas.width, streetHeight )
        for(let i = -10; i < this.canvas.width; i+=70){
            this.ctx.fillStyle = '#f1e320';
            this.ctx.fillRect(i, this.canvas.height - 50, 50, 5 )
        }
    }

    setBuildings() {        
        // const buildingColor = ['#292727', '#222221', '#0f0f0e'];
        for(let i = -20; i < this.canvas.width; i+=120) {
            // const colorIndex = getRandomInt(buildingColor.length);
            const width = getRandomIntMinMax(70, 130);
            const height = getRandomIntMinMax(100, 450);
            const y = this.canvas.height - (height + 102);
            this.building = new Building(this.canvas, i, y, width, height, '#0f0f0e');
            this.building.setBuilding()
        }
    }
}