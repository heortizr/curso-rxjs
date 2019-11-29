import { fromEvent } from 'rxjs';

/**
 * evetos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(event => {
  console.log('x:', event.x, 'y:', event.y);
});

src2$.subscribe(event => {
  console.log(event.key);
});
