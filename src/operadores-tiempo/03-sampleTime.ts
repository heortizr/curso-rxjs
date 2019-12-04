import { fromEvent, asyncScheduler } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(sampleTime(3000))
  .pipe(map(({ x, y }) => ({ x, y })))
  .subscribe(console.log);
