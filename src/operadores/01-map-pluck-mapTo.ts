import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1, 5)
//   .pipe(map<number, number>(x => x * 10))
//   .subscribe(console.log);

// range(1, 5)
//   .pipe(map<number, string>(x => (x * 10).toString()))
//   .subscribe(console.log);

// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
//   .pipe(map(({ code }) => code));

// const subs = keyup$.subscribe(value => console.log('map', value));

// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
//   .pipe(pluck('key'));

// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
//   .pipe(pluck('target','baseURI'));

// const subs = keyup$.subscribe(value => console.log('pluck', value));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
  .pipe(mapTo('tecla presionada'));

const subs = keyup$.subscribe(value => console.log('mapTo', value));

