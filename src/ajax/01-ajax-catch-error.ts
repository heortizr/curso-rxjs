import { ajax } from 'rxjs/ajax';
import { map, catchError, pluck } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';
const fetchPromise = fetch(url);
const handleError = (res: Response) => {
  if (!res.ok) throw new Error(res.statusText);
  return res;
}

// fetchPromise
//   .then(handleError)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.warn);

// ajax(url)
//   .pipe(map(resp => resp.response))
//   .subscribe(console.log);

ajax(url)
  .pipe(pluck('response'))
  .pipe(catchError(err => {
    console.warn('error');
    return of([]);
  }))
  .subscribe(console.log);
