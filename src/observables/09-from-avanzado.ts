import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
  next: value => console.log('next:', value),
  complete: () => console.log('complete'),
};

// const src$ = from([1,2,3,4,5]);
// const src$ = of(...[1,2,3,4,5]);
// const src$ = from('Hugo');
// const src$ = of('Hugo');

// src$.subscribe(observer);

// const src$ = from(fetch('https://api.github.com/users/heortizr'));

// src$.subscribe(async (resp) => {
//   const body = await resp.json();
//   console.log(body);
// });

const miGenerador = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// es pisble accesder a los valores de la funcion
// generadora de esta forma, pero no es la unica
// for (let id of miIterable) {
//   console.log(id);
// }

// tambien es posible obtenerlos con from
from(miIterable).subscribe(observer);
