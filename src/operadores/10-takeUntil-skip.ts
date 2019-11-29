import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Detener timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);

// skip obliga a hacer click dos veces, porque la primera lo omite skip
const click$ = fromEvent<MouseEvent>(button, 'click')
  .pipe(skip(1));

// click$
//   .subscribe({
//     next: value => console.log('next:', value),
//     complete: () => console.log('complete'),
//   });

// counter$
//   .pipe(takeUntil(click$))
//   .subscribe({
//     next: value => console.log('next:', value),
//     complete: () => console.log('complete'),
//   });

counter$
  .pipe(takeUntil(click$))
  .subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete'),
  });
