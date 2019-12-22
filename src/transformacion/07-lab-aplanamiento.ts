import { fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// helper
const url = 'https://reqres.in/api/login?delay=1';
const peticionHttpLogin = (user) => ajax.post(url, user)
  .pipe(pluck('response', 'token'))
  .pipe(catchError(err => of({})));

// formulario
const body = document.querySelector('body');
const form = document.createElement('form');
const inputUser = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuracioens
inputUser.type = 'email';
inputUser.placeholder = 'email';
inputUser.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputUser, inputPass, submitBtn);
body.append(form);

// streams
const submitForm$ = fromEvent(form, 'submit')
  .pipe(tap(ev => ev.preventDefault()))
  .pipe(map(ev => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })))
  // completa todas las subscriones que tiene
  // .pipe(mergeMap(peticionHttpLogin))

  // solo completa la ultima subscripcion, y cancela las anteriores
  // .pipe(switchMap(peticionHttpLogin))

  // solo toma uno nuevo hasta que se complete el que esta en curso
  .pipe(exhaustMap(peticionHttpLogin))
  ;

submitForm$
  .subscribe(token => {
    console.log('token', token);
  });
