export default class Clock {
    constructor() {
        this.date = new Date();
        this.year = this.date.getFullYear();
        this.month = this.date.getDate() - 2;
        this.mDay = this.date.getUTCDate()
        this.day = this.date.getDay();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
        this.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    setRealTime() {
        return `${this.#setDay()} ${this.#setDate()} ${this.#setClock()}`;
    }

    #checkTime(time) {
        if(time < 10) return `0${time}`;
        return time;
    }

    #checkDate(day) {
        switch(day) {
            case 1 || 21 || 31:
                return `${day}st`;
                break;
            case 2 || 22:
                return `${day}nd`;
                break;
            case 3:
                return `${day}rd`;
                break;
            default:
                return `${day}th`;
                break;
        }
    }

    #setClock() {
        return `${this.#checkTime(this.hour)}:${this.#checkTime(this.minute)}`;
    }

    #setDay() {
        return `${this.weekdays[this.day]}`
    }

    #setDate() {
        console.log(this.month)
        return `${this.months[this.month]} ${this.#checkDate(this.mDay)} ${this.year}`;
    }
}