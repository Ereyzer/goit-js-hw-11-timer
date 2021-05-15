import '../style.scss';
import templatesTimer from '../templates/timer-plugin.hbs'

export default class CountdownTimer {
    today = this.dateNow();
    constructor({selector, targetDate, parentSelector}) {
        this.targetDate = targetDate;
        this.selector = selector;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.reference ={
            parent: document.querySelector(parentSelector),

        };    
    }
    
    renderHtml(){
        this.reference.parent.insertAdjacentHTML('afterbegin', templatesTimer(this));
        this.reference.parent.classList.add('timer-plugin-class')
        this.reference.secs = document.querySelector('[data-value="secs"]');
        this.reference.hour = document.querySelector('[data-value="hours"]');
        this.reference.minute = document.querySelector('[data-value="mins"]');
        this.reference.day = document.querySelector('[data-value="days"]');
        this.reference.timer = document.getElementById(this.selector);
         setInterval(this.timerWrithe.bind(this), 1000);
    }
    addSomeTime(){
        this.somTime = this.targetDate - this.dateNow();
    }
    dateNow(){
        return new Date();
    }
    timerWrithe() {
        this.addSomeTime.call(this);
        this.reference.secs.textContent = this.dateSecondsTimer.call(this);
        this.reference.minute.textContent = this.dateMinutesTimer.call(this);
        this.reference.hour.textContent = this.dateHoursTimer.call(this);
        this.reference.day.textContent = this.dateDayTimer.call(this);
    }
    
    dateDayTimer(){
        return Math.floor(this.somTime / (1000 * 60 * 60 * 24));
    }
    dateHoursTimer(){
        return Math.floor((this.somTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }
    dateMinutesTimer(){
        return Math.floor((this.somTime % (1000 * 60 * 60)) / (1000 * 60));;
    }
    dateSecondsTimer(){
        return Math.floor((this.somTime % (1000 * 60)) / 1000);
    }
}
