import Building from "./building.js";
import Person from "./person.js";
import { getRandomIntMinMax, getRandomInt } from "../utils/math.js";

export default class City {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.buildings = [];
        this.citizens = [];
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
        for(let i = -20; i < this.canvas.width; i+=120) {
            const width = getRandomIntMinMax(70, 130);
            const height = getRandomIntMinMax(100, 450);
            const y = this.canvas.height - (height + 102);
            this.building = new Building(this.canvas, i, y, width, height, '#0f0f0e');
            this.building.setBuilding()
        }
    }

    setCitizens() {
        const data = {
            fullName: 'Peter Wagner',
            gender: 'male',
            age: 38,
            job: 'Software Engineer'
        };
        const persone = new Person(this.canvas, data);
        
    }
}