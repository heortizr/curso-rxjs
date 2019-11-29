import { asyncScheduler } from 'rxjs';

// setTimeout(() => { }, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('hola mundo');
const saludar2 = nombre => console.log(`hola ${nombre}`);

// funciona como un set time out
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Hugo');

// funciona como un set interval
// no fuende ser una funcion de flecha
const subscription = asyncScheduler.schedule(function(state) {
  console.log('state', state);
  this.schedule(++state, 1000);
}, 3000, 0);

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
