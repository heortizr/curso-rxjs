import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: valor => console.log('next: ', valor),
  error: error => console.warn('error: ', error),
  complete: () => console.info('completado'),
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
  subs.next('Hola');
  subs.next('Mundo');

  // forzar un error
  // const a = undefined;
  // a.nombre = 'Hugo';

  subs.complete();

  subs.next('Hola');
  subs.next('Mundo');
});

obs$.subscribe(observer);

// obs$.subscribe(
//   valor => console.log('next: ', valor),
//   error => console.warn('error: ', error),
//   () => console.info('completado'),
// );
