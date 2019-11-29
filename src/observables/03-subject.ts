import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: valor => console.log('next: ', valor),
  error: error => console.warn('error: ', error),
  complete: () => console.info('completado'),
};

const intervalo$ = new Observable<number>( subs => {
  const internvalId = setInterval(() => subs.next(Math.random()), 1000);
  return () => {
    clearInterval(internvalId)
    console.log('intervalo terminado');
  };
});

// const subs1 = intervalo$.subscribe(valor => console.log('subs1: ', valor));
// const subs2 = intervalo$.subscribe(valor => console.log('subs2: ', valor));

/**
 * 1. casteo multiple
 * 2. tambien es un observer
 * 3. next, error y complete
 */
const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
