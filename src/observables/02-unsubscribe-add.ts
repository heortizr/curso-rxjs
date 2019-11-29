import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: valor => console.log('next: ', valor),
  error: error => console.warn('error: ', error),
  complete: () => console.info('completado'),
};

const intervalo$ = new Observable<number>(subscriber => {
  let num = 0;

  const interval = setInterval(() => {
    subscriber.next(num++);
    console.log(num);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('intervalo destruido');
  };
});

const subs1 = intervalo$.subscribe();
const subs2 = intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

subs1
  .add(subs2)
  .add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  console.log('completado timeout');
}, 6000);
