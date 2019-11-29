import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$
  .pipe(distinctUntilChanged())
  .subscribe(console.log);

interface Personaje {
  nombre: string
}

const personajes: Personaje[] = [
  { nombre: 'Megaman' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'X' },
  { nombre: 'Dr. Wally' },
  { nombre: 'Zero' },
  { nombre: 'Zero' },
  { nombre: 'Megaman' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Megaman' },
  { nombre: 'Zero' },
];

const personajes$ = from(personajes);

personajes$
  .pipe(distinctUntilChanged(({ nombre: ant }, { nombre: act }) => ant === act))
  .subscribe(console.log);
