import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

// ajax.get(url, headers);
// ajax.post(url, body, headers);

// ajax
//   .post(url, { id: 1 }, { 'mi-token': 'ABC123' })
//   .subscribe(console.log);

ajax({
  url,
  method: 'POST',
  headers: {
    'mi-token': 'ABC123',
  },
  body: {
    id: 1,
    nombre: 'Hugo'
  }
})
  .subscribe(console.log);
