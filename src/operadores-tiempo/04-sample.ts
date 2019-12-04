import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const internal$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

internal$
  .pipe(sample(click$))
  .subscribe(console.log);
