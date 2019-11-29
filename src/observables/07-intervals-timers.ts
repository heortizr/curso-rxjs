import { interval, timer } from 'rxjs';

const observer = {
  next: value => console.log('next:', value),
  complete: () => console.log('completado'),
};

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

// console.log('inicio');
// interval$.subscribe(observer);
// console.log('fin');

console.log('inicio');
timer$.subscribe(observer);
console.log('fin');
