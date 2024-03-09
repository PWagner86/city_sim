export default class Clock {
    constructor() {
        this.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];        // this.getDate();
    }

    getDate() {
        const date = this.getDateData();
        this.setRealTime(date.second, date.minute, date.hour, date.day, date.month, date.mDay, date.year);
        setTimeout(() => this.getDate(), 500);
    }

    setRealTime(second, minute, hour, day, month, mDay, year) {
        const time = document.querySelector('span');
        time.innerHTML = `${this.#setDay(day)} ${this.#setDate(month, mDay, year)} ${this.#setClock(hour, minute, second)}`
        return `${this.#setDay(day)} ${this.#setDate(month, mDay, year)} ${this.#setClock(hour, minute, second)}`;
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

    #setClock(hour, minute, second) {
        return `${this.#checkTime(hour)}:${this.#checkTime(minute)}:${this.#checkTime(second)}`;
    }

    #setDay(day) {
        return `${this.weekdays[day]}`;
    }

    #setDate(month, mDay, year) {
        return `${this.months[month]} ${this.#checkDate(mDay)} ${year}`;
    }

    getDateData() {
        const date = new Date();

        return {
            year : date.getFullYear(),
            month : date.getMonth(),
            mDay : date.getUTCDate(),
            day : date.getDay(),
            hour : date.getHours(),
            minute : date.getMinutes(),
            second : date.getSeconds()
        };
    }
}