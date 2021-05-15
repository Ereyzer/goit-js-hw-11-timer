import './styles.css';
import CountdownTimer from './plugin-timer/js/timer-plugin'


const timerOne = new CountdownTimer({
    parentSelector: 'body',
    selector: 'timer-1',
    targetDate: new Date('January 01, 2022'),
    presentationName: 'до нового року залишилось',
  });

  timerOne.renderHtml();


