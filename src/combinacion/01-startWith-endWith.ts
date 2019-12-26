import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

const numeros$ = of(1,2,3);

numeros$
  .pipe(startWith('a','b','c'))
  .pipe(endWith('x','y','z'))
  .subscribe(console.log);
