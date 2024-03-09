export default class Person {
    constructor(canvas, personData) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.fullName = personData.fullName
        this.gender = personData.gender;
        this.age = personData.age;
        this.job = personData.job;
    }

    setPerson() {

    }

    drawPerson() {
        
    }
}