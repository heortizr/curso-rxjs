import { combineLatest, fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.type = 'email';
input1.placeholder = 'email@host.com';

input2.type = 'password';
input2.placeholder = '*****';

document
  .querySelector('body')
  .append(input1, input2);

// helper
const getInputStream = (elem: HTMLElement) => fromEvent<KeyboardEvent>(elem, 'keyup')
    .pipe(pluck<KeyboardEvent, string>('target', 'value'));

combineLatest(
  getInputStream(input1),
  getInputStream(input2),
).subscribe(console.log);
