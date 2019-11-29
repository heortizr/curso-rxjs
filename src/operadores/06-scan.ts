import { from } from "rxjs";
import { reduce, scan } from "rxjs/operators";
import { access } from "fs";

const numeros = [1,2,3,4,5];
const acumulador = (acc, cur) => acc + cur;

// reduce
from(numeros)
  .pipe(reduce(acumulador))
  .subscribe(console.log);

// scan
from(numeros)
  .pipe(scan(acumulador))
  .subscribe(console.log);

// redux
interface User {
  id?: string,
  autenticado?: boolean,
  token?: string,
  edad?: number,
};

const user: User[] = [
  { id: 'heor', autenticado: false, token: null },
  { id: 'heor', autenticado: true, token: 'abc' },
  { id: 'heor', autenticado: true, token: 'abc123' },
];

const state$ = from(user)
  .pipe(scan((acc, cur) => ({ ...acc, ...cur }), { edad: 33 }))
  .subscribe(console.log);
