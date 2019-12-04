import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(map(({ x }) => x))
  .pipe(tap(value => console.log('tap:', value)))
  .pipe(auditTime(2000))
  .subscribe(console.log);
