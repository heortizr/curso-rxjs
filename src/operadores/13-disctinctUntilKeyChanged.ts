import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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
  .pipe(distinctUntilKeyChanged('nombre'))
  .subscribe(console.log);
