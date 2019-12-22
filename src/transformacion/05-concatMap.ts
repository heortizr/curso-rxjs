import { interval, fromEvent } from "rxjs";
import { take, switchMap, concatMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(3));

// click$
//   .pipe(switchMap(() => interval$))
//   .subscribe(console.log);

click$
  .pipe(concatMap(() => interval$))
  .subscribe(console.log);
