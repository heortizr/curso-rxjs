import { range, from } from 'rxjs';
import { filter } from 'rxjs/operators';

// range(1,10)
//   .pipe(filter(x => x % 2 === 1))
//   .subscribe(console.log);

// range(1,10)
//   .pipe(filter((val, ind) => {
//     console.log('index:', ind);
//     return (val % 2 === 1);
//   }))
//   .subscribe(console.log);

interface Personaje {
  tipo: string,
  nombre: string,
  principal: boolean,
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman',
    principal: true,
  },
  {
    tipo: 'heroe',
    nombre: 'Robin',
    principal: false,
  },
  {
    tipo: 'villano',
    nombre: 'Joker',
    principal: true,
  },
];

// from(personajes)
//   .pipe(filter(({ tipo }) => tipo === 'heroe'))
//   .pipe(filter(({ principal }) => principal))
//   .subscribe(console.log);

from(personajes)
  .pipe(
    filter(({ tipo }) => tipo === 'heroe'),
    filter(({ principal }) => principal),
  )
  .subscribe(console.log);
