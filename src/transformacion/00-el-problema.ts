import { fromEvent } from "rxjs";
import { debounceTime, map, pluck } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// streams
const input$ = fromEvent(textInput, 'keyup');

input$
  .pipe(debounceTime(500))
  .pipe(map(event => {
    const text = event.target['value'];
    return ajax.getJSON(`https://api.github.com/users/${text}`);
  }))
  .subscribe(res => {
    res
      .pipe(pluck('url'))
      .subscribe(console.log);
  });