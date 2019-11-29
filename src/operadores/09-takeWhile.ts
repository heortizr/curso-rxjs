import { fromEvent } from "rxjs";
import { takeWhile, map } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click')
  .pipe(map(({ x, y}) => ({ x, y })))
  // inclusive == false, no mostrara el valor que completa el observable
  // .pipe(takeWhile(({y}) => y <= 150))
  // inclusive == true, mostrara el valor que completa el observable
  .pipe(takeWhile(({y}) => y <= 150, true));

click$
  .subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete'),
  });
