import { fromEvent } from "rxjs";
import { take, first } from "rxjs/operators";

// const click$ = fromEvent<MouseEvent>(document, 'click')
//   .pipe(take(1));

const click$ = fromEvent<MouseEvent>(document, 'click')
  .pipe(first<MouseEvent>(({ clientY }) => clientY >= 150));

click$
  .subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete'),
  });
