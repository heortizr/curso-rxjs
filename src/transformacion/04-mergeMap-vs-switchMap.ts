import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

// mantiene subscripciones ilimitadas
// click$
//   .pipe(mergeMap(() => interval$))
//   .subscribe(console.log);

// solo mantiene la ultima subscripcion
click$
  .pipe(switchMap(() => interval$))
  .subscribe(console.log);
