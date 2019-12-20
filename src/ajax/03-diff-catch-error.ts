import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";

const handleError = (err) => {
  console.warn('error', err.message);
  return of({});
};

const url = 'https://httpbin.org/delay/1';

// const obs1$ = ajax.getJSON(url)
//   .pipe(catchError(handleError));
// const obs2$ = ajax(url)
//   .pipe(catchError(handleError));

// obs1$.subscribe(data => console.log('data', data));
// obs2$.subscribe(data => console.log('data', data));

const obs1$ = ajax.getJSON(url)
  .pipe(catchError(handleError));

obs1$.subscribe({
  next: data => console.log('data', data),
  error: err => console.log('error', err),
  complete: () => console.log('completed'),
});
