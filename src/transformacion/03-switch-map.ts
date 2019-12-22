import { fromEvent, Observable } from "rxjs";
import { debounceTime, pluck, mergeMap, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/GithubUser.interface";
import { GithubUsers } from "../interfaces/GithubUsers.interface";

// referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// helpers
const showUsers = (users: GithubUser[]) => {
  console.log(users);
  users.forEach(user => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const anchor = document.createElement('a');

    img.src = user.avatar_url;
    anchor.href = user.html_url;
    anchor.text = 'ver pagina';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);

    orderList.append(li);
  });
};

// streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

const searchUsers = text => ajax.getJSON<GithubUsers>(`https://api.github.com/search/users?q=${text}`);

input$
  .pipe(debounceTime(500))
  .pipe(pluck<KeyboardEvent, String>('target','value'))
  .pipe(mergeMap<String, Observable<GithubUsers>>(searchUsers))
  .pipe(pluck<GithubUsers, GithubUser[]>('items'))
  ;
  // .subscribe(showUsers);

const url = 'https://httpbin.org/delay/1?arg=';

input$
  .pipe(pluck('target','value'))
  .pipe(switchMap(value => ajax.getJSON(url+value)))
  .subscribe(console.log);
