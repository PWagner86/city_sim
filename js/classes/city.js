import Building from "./building.js";
import Person from "./person.js";
import { getRandomIntMinMax, getRandomInt } from "../utils/math.js";
import { jobs } from "../utils/data.js";

export default class City {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.buildings = [];
        this.citizens = [];
        console.log(this.citizens)
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
        const width = 100;
        const height = 275;
        const x = -20;
        const y = this.canvas.height - (height + 102);
        const buildingA = new Building(this.canvas, x, y - 100, width, height + 100, '#0f0f0e');
        buildingA.setBuilding();
        this.buildings.push(buildingA);
        const buildingB = new Building(this.canvas, x + 110, y, width, height, '#0f0f0e');
        buildingB.setBuilding();
        this.buildings.push(buildingB);
        const buildingC = new Building(this.canvas, x + 220, y - 60, width, height + 60, '#0f0f0e');
        buildingC.setBuilding();
        this.buildings.push(buildingC);
        const buildingD = new Building(this.canvas, x + 330, y + 80, width, height - 80, '#0f0f0e');
        buildingD.setBuilding();
        this.buildings.push(buildingD);
        const buildingE = new Building(this.canvas, x + 440, y - 120, width, height + 120, '#0f0f0e');
        buildingE.setBuilding();
        this.buildings.push(buildingE);
        const buildingF = new Building(this.canvas, x + 550, y - 200, width, height + 200, '#0f0f0e');
        buildingF.setBuilding();
        this.buildings.push(buildingF);
        const buildingG = new Building(this.canvas, x + 660, y, width, height, '#0f0f0e');
        buildingG.setBuilding();
        this.buildings.push(buildingG);
        const buildingH = new Building(this.canvas, x + 770, y - 50, width, height + 50, '#0f0f0e');
        buildingH.setBuilding();
        this.buildings.push(buildingH);
        const buildingI = new Building(this.canvas, x + 880, y + 20, width, height - 20, '#0f0f0e');
        buildingI.setBuilding();
        this.buildings.push(buildingI);
        const buildingJ = new Building(this.canvas, x + 990, y, width, height, '#0f0f0e');
        buildingJ.setBuilding();
        this.buildings.push(buildingJ);
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