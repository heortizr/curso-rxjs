import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of([1,2], {a: 2}, function(){}, true, Promise.resolve(true));

// esto es sincrono
console.log('inicio de obs$');
obs$.subscribe(
  value => console.log('value', value),
  null,
  () => console.log('termino la secuencia'),
);
console.log('fin de obs$');
