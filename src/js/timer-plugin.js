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
        
        console.log(this)
        
        this.reference.parent.insertAdjacentHTML('afterbegin', templatesTimer(this)) ;
        this.reference.secs = document.querySelector('[data-value="secs"]');
        this.reference.hour = document.querySelector('[data-value="hours"]');
        this.reference.minute = document.querySelector('[data-value="mins"]');
        this.reference.day = document.querySelector('[data-value="days"]');
        this.reference.timer = document.getElementById(this.selector);
        console.log(this.reference.timer)
    


        setInterval(this.timerWrithe.bind(this), 1000);
    }
    addSomeTime(){
        this.somTime = this.targetDate - this.dateNow();
    }
    dateNow(){

        return new Date();
    }
    timerWrithe() {
        console.log(this.reference.secs.textContent)
        this.addSomeTime.call(this);
        this.reference.secs.textContent = this.dateSecondsTimer.call(this);
        this.reference.minute.textContent = this.dateMinutesTimer.call(this);
        this.reference.hour.textContent = this.dateHoursTimer.call(this);
        this.reference.day.textContent = this.dateDayTimer.call(this);
        // hour.textContent = 
        // console.log(timerOne.dateNow())
        //  setInterval(secondWrithe, 2000)
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

// const timerOne = new CountdownTimer({
//     selector: 'timer-1',
//     targetDate: new Date('Jul 17, 2022'),
//   });

//* створили розмітку





    // console.log(secs)
    // console.log(timerOne)



  /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);