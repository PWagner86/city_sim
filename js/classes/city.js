import Building from "./building.js";
import Person from "./person.js";
import { getRandomIntMinMax, getRandomInt } from "../utils/math.js";
import { jobs } from "../utils/data.js";

export default class City {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = 100;
        this.height = 275;
        this.x = -20;
        this.y = this.canvas.height - (this.height + 102);
        this.buildingData = [
            {
                x: this.x - 0,
                y: this.y - 100,
                height: this.height + 100
            },
            {
                x: this.x + 110,
                y: this.y,
                height: this.height
            },
            {
                x: this.x + 220,
                y: this.y - 60,
                height: this.height + 60
            },
            {
                x: this.x + 330,
                y: this.y + 80,
                height: this.height - 80
            },
            {
                x: this.x + 440,
                y: this.y - 120,
                height: this.height + 120
            },
            {
                x: this.x + 550,
                y: this.y - 200,
                height: this.height + 200
            },
            {
                x: this.x + 660,
                y: this.y,
                height: this.height
            },
            {
                x: this.x + 770,
                y: this.y - 50,
                height: this.height + 50
            },
            {
                x: this.x + 880,
                y: this.y + 20,
                height: this.height - 20
            },
            {
                x: this.x + 990,
                y: this.y,
                height: this.height
            }
        ];

        this.buildings = [];
        this.citizens = [];
        console.log(this.citizens)
    }

    setStreet(ctx) {
        const streetHeight = 100
        ctx.fillStyle = '#3b3b3b';
        ctx.fillRect(0, this.canvas.height - streetHeight,  this.canvas.width, streetHeight )
        for(let i = -10; i < this.canvas.width; i+=70){
            ctx.fillStyle = '#f1e320';
            ctx.fillRect(i, this.canvas.height - 50, 50, 5 )
        };
    }

    setBuildings(ctx) {        
        for(let i = 0; i < this.buildingData.length; i ++) {
            const building = new Building(this.buildingData[i].x, this.buildingData[i].y, this.width, this.buildingData[i].height, '#0f0f0e');
            building.setBuilding(ctx);
            this.buildings.push(building);
        };
    }

    setCitizens() {
        const citizenCount = 100
        for(let i = 0; i < citizenCount; i++){
            const index = getRandomInt(jobs.length);
            const data = {
                fullName: 'Peter Wagner',
                gender: 'male',
                age: 38,
                job: jobs[index]
            };
            this.citizens.push(new Person(this.canvas, data, getRandomIntMinMax(1, 120), getRandomIntMinMax(-300, -10)));
        };

    }
}