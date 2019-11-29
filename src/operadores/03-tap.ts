import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5)
  .pipe(tap(x => console.log('tab:', x)))
  .pipe(map(x => x * x * x));

numeros$.subscribe(value => console.log('next:', value));
