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
        this.seconds = 0;
        this.reference ={
            parent: document.querySelector(parentSelector),


        };    
    }
    
    renderHtmlTimer(){
        this.reference.parent.insertAdjacentHTML('afterbegin', templatesTimer(this));
        this.reference.parent.classList.add('timer-plugin-class')
        this.reference.rotate = this.reference.parent.querySelectorAll(`#${this.selector}[data-value="rotate"]`);
        this.reference.secs = this.reference.parent.querySelectorAll(`#${this.selector} [data-value="secs"]`);
        this.reference.hour = this.reference.parent.querySelectorAll(`#${this.selector} [data-value="hours"]`);
        this.reference.minute = this.reference.parent.querySelectorAll(`#${this.selector} [data-value="mins"]`);
        this.reference.day = this.reference.parent.querySelectorAll(`#${this.selector} [data-value="days"]`);
        // this.reference.timer = this.reference.parent.getElementById(this.selector);
         setInterval(this.timerWrithe.bind(this), 1000);
    }
    addSomeTime(){ 
        return this.somTime = this.targetDate - this.dateNow();
    };
    
    dateNow(){ return new Date()};
    
    timerWrithe() {
        //*this.reference.rotate.forEach(el => el.classList.toggle('countDown_digit_new_rotate'));
        
        
        this.addSomeTime.call(this);
        this.reference.secs.forEach(el => el.textContent = this.dateSecondsTimer.call(this));
        this.reference.minute.forEach(el => el.textContent = this.dateMinutesTimer.call(this));
        this.reference.hour.forEach(el => el.textContent = this.dateHoursTimer.call(this));
        this.reference.day.forEach(el => el.textContent = this.dateDayTimer.call(this));

    }
    
    dateDayTimer(){ 
        return Math.floor(this.somTime / (1000 * 60 * 60 * 24))
    };
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



