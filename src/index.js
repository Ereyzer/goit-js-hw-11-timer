import './styles.css';
import CountdownTimer from './plugin-timer/js/timer-plugin'


const timerOne = new CountdownTimer({
    parentSelector: 'body',
    selector: 'timer-1',
    targetDate: new Date('January 01, 2022'),
    presentationName: 'до нового року залишилось',
  });

  timerOne.renderHtmlTimer();

const timerTwo = new CountdownTimer({
    parentSelector: '.container',
    selector: 'timer-2',
    targetDate: new Date('July 07, 2021'),
    presentationName: 'до свята ІВАНА КУПАЛА',
});


    timerTwo.renderHtmlTimer();


