import './styles.css';
import CountdownTimer from './plugin-timer/js/timer-plugin';




const timerOne = new CountdownTimer({
    parentSelector: 'body',
    selector: 'timer-1',
    targetDate: new Date('January 01, 2022'),
    presentationName: 'до нового року залишилось',
  });

 timerOne.renderHtmlTimer();
  
//  console.log(timerOne);

const timerTwo = new CountdownTimer({
    parentSelector: '.container',
    selector: 'timer-2',
    targetDate: new Date('July 07, 2021'),
    presentationName: 'до свята ІВАНА КУПАЛА',
});


    timerTwo.renderHtmlTimer();
// console.log(timerTwo);

// const obj = {

//     a: 1,
//     b:2,
// }

// function name(params) {
//     this.b = params;
//     return;
// }

// const calF = name.call(obj, 3);

// console.log(calF)
// console.log(obj);

// // calF(3);
// // calF(4);
// const bindF = name.bind(obj);
// bindF(7)
// console.log(obj)
// bindF(9)
// console.log(obj)
