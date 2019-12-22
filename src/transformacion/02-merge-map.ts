import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";

// const letras$ = of('a', 'b', 'c');

// letras$
//   .pipe(mergeMap(letra => interval(1000).pipe(map(i => letra+i)).pipe(take(3))))
//   .subscribe({
//     next: value => console.log('next:', value),
//     complete: () => console.log('completed'),
//   });

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$))))
  .subscribe(console.log);
