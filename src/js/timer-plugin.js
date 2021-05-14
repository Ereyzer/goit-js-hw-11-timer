import templatesTimer from '../templates/timer-plugin.hbs'
const refs = {
    body: document.querySelector('body'),
    
 
}


class CountdownTimer {
    // today = this.dateNow();
    constructor({selector, targetDate}) {
        this.targetDate = targetDate;
        this.selector = selector;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = this.dateNow();
        this.reference={
            secs: document.querySelector('[data-value="secs"]'),
           hour: document.querySelector('[data-value="hours"]'),
           minute: document.querySelector('[data-value="mins"]'),
           day: document.querySelector('[data-value="day"]'),
        }
        
    }

    dateNow(){
        let today = new Date();
        // console.log(today);
        let seconds = today.getSeconds()
        
        // setInterval(this.dateNow, 1000)
        return seconds;
    }
    
    dateDayTimer(){
        
    }
    dateHoursTimer(){

    }
    dateMinutesTimer(){

    }
    dateSecondsTimer(){
        // console.log(this.targetDate.getSeconds());
        // console.log(this.today);
        
        // console.log(time)
        // const secs = Math.floor((time % (1000 * 60)) / 1000);
        // setTimeout(this.dateSecondsTimer,1000)
    //   return time;
      
    }
}

const timerOne = new CountdownTimer({
    selector: 'timer-1',
    targetDate: new Date('Jul 17, 2022'),
  });

//   templatesTimer(timerOne);
    console.log(timerOne.selector);
  console.log(templatesTimer(timerOne));
  refs.body.innerHTML = templatesTimer(timerOne);

//   timerOne.dateNow();
//  const secs =document.getElementById(timerOne.selector);

console.log(timerOne.reference.secs)

// console.log(secs)
// function secondWrithe() {
//     secs.textContent = timerOne.dateNow();
//     // hour.textContent = 
//     // console.log(timerOne.dateNow())
//      setInterval(secondWrithe, 1000)
// }
// secondWrithe()

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