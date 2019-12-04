import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const input = document.createElement('input');
const body = document.querySelector('body');

body.append(input);

const click$ = fromEvent(document, 'click');
const input$ = fromEvent(input, 'keyup');

click$
  .pipe(debounceTime(1000))
  .subscribe(console.log);

input$
  .pipe(debounceTime(1000))  
  .pipe(pluck('target', 'value'))  
  .pipe(distinctUntilChanged())  
  .subscribe(console.log);
