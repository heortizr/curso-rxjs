import { fromEvent, asyncScheduler } from 'rxjs';
import { pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';

const input = document.createElement('input');
const body = document.querySelector('body');

body.append(input);

const click$ = fromEvent(document, 'click');
const input$ = fromEvent(input, 'keyup');

click$
  .pipe(throttleTime(1000))
  .subscribe(console.log);

input$
  .pipe(throttleTime(1000, asyncScheduler, {
    leading: true, // primer elemento
    trailing: true, // ultimo elemento
  }))
  .pipe(pluck('target', 'value'))  
  .pipe(distinctUntilChanged())  
  .subscribe(console.log);
