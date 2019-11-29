import { interval } from 'rxjs';
import { take, reduce } from 'rxjs/operators';

// // reduce for arrays in javascript
// const numbers = [1,2,3,4,5];
// const total = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(total);

interval(500)
  .pipe(take(10))
  .pipe(reduce((acc, curr) => acc + curr, 0))
  .subscribe({
    next: value => console.log('total:', value),
    complete: () => console.log('completed'),
  });

