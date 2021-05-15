import './styles.css';
import './js/timer-plugin';
import CountdownTimer from './js/timer-plugin'
console.log('hello');

const timerOne = new CountdownTimer({
    parentSelector: 'body',
    selector: 'timer-1',
    targetDate: new Date('May 21, 2021'),
  });
  console.log(timerOne)
  timerOne.renderHtml();
//   console.log(timerOne)

