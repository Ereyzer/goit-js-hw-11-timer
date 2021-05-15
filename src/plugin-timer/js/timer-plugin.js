import '../style.scss';
import templatesTimer from '../templates/timer-plugin.hbs'

export default class CountdownTimer {
    today = this.dateNow();
    constructor({selector, targetDate, parentSelector, presentationName}) {
        this.targetDate = targetDate;
        this.selector = selector;
        this.presentationName = presentationName;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 55;
        this.reference ={
            parent: document.querySelector(parentSelector),


        };    
    }
    
    renderHtmlTimer(){
        this.reference.parent.insertAdjacentHTML('afterbegin', templatesTimer(this));
        this.reference.parent.classList.add('timer-plugin-class')
        this.reference.rotate = document.querySelectorAll('[data-value="rotate"]');
        this.reference.secs = document.querySelectorAll('[data-value="secs"]');
        this.reference.hour = document.querySelectorAll('[data-value="hours"]');
        this.reference.minute = document.querySelectorAll('[data-value="mins"]');
        this.reference.day = document.querySelectorAll('[data-value="days"]');
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
        // this.reference.rotate.classList.remove('countDown_digit_new_rotate');

        this.reference.rotate.forEach(el => el.classList.toggle('countDown_digit_new_rotate'));
        this.addSomeTime.call(this);
        this.reference.secs.forEach(el => el.textContent = this.dateSecondsTimer.call(this));
        this.reference.minute.forEach(el => el.textContent = this.dateMinutesTimer.call(this));
        this.reference.hour.forEach(el => el.textContent = this.dateHoursTimer.call(this));
        this.reference.day.forEach(el => el.textContent = this.dateDayTimer.call(this));

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
