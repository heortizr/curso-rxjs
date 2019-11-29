import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const progressBar = document.createElement('div');
const texto = document.createElement('div');
const body = document.querySelector('body');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et commodo mauris. Maecenas nulla sem, rhoncus et porttitor at, aliquam in tellus. Praesent sodales erat neque, at tempor lectus sagittis euismod. Ut pulvinar sollicitudin interdum. Nam eu turpis in libero ultrices bibendum id eget lacus. Suspendisse potenti. Pellentesque ornare, lorem vitae tincidunt suscipit, augue leo vulputate turpis, eu scelerisque ex elit a velit. Nam bibendum velit nec justo iaculis, eu sagittis justo ultrices. Ut tempor est vel tortor mollis pellentesque. Nullam lacinia sed ex quis maximus. Integer ac eros ac lorem accumsan volutpat. Aliquam erat volutpat. Maecenas a odio tincidunt, pulvinar sem in, bibendum ex. Sed commodo hendrerit odio iaculis gravida. Morbi tellus elit, fermentum et ornare vitae, consequat id sapien. Fusce pharetra orci et magna efficitur, dignissim luctus nulla volutpat.
<br /><br />
Pellentesque quam quam, consectetur venenatis arcu vel, sagittis lobortis massa. Ut tristique vestibulum turpis at congue. Aenean aliquam, urna sed posuere fermentum, nisi lorem aliquam tortor, at maximus eros sapien ac odio. Integer fermentum imperdiet quam, ut consectetur dolor blandit in. Aliquam lacinia dolor eu felis dignissim, venenatis fringilla enim placerat. Proin eget sem et quam volutpat fermentum et aliquam ante. Donec tempus aliquam feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus sollicitudin volutpat. Quisque fringilla fermentum euismod. Etiam efficitur lobortis maximus. Mauris pulvinar dolor enim, sit amet imperdiet turpis mattis et. Mauris elit mi, blandit finibus porttitor sed, cursus eu lectus.
<br /><br />
Pellentesque id arcu sit amet magna interdum condimentum tristique vitae quam. Aenean ut mi tempor, viverra ligula eget, mollis dui. Sed non metus a felis imperdiet vestibulum. Vivamus dui tortor, luctus non luctus ut, interdum nec ligula. Proin vel nulla sed velit efficitur lacinia id a leo. In consequat quam eu mauris elementum consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean faucibus sem risus, efficitur mattis leo facilisis vitae. Pellentesque sodales quam cursus, suscipit ipsum sed, sodales urna. Sed ut ex ut risus euismod malesuada quis nec nibh. Suspendisse vitae dictum dui, vitae accumsan leo. Morbi vel facilisis ex. Ut malesuada purus vel efficitur scelerisque. Curabitur eget aliquam velit. Phasellus at ultricies metus, et eleifend tellus.
<br /><br />
Aenean varius augue ultrices enim volutpat, nec interdum magna iaculis. Sed dolor libero, tempus at lacinia sit amet, scelerisque quis felis. Vestibulum ornare, tellus a ultrices ultricies, dolor velit pretium mauris, vitae viverra metus turpis malesuada dolor. Donec vulputate quam est, quis consequat mi dignissim ac. Aliquam accumsan euismod quam vitae finibus. Sed luctus magna eu facilisis vestibulum. Suspendisse nec eros ut magna placerat pretium sed vitae augue. Nulla ex dolor, varius ac arcu non, aliquet scelerisque dui. Pellentesque id mollis leo. Etiam tempor, odio sed posuere sagittis, purus nunc feugiat risus, id egestas enim lectus eu nisl. Praesent quis aliquam tortor. Donec sit amet diam interdum, gravida nunc aliquam, placerat dui.
<br /><br />
Nulla quis tristique risus, eget pellentesque magna. Suspendisse ut posuere diam, vitae aliquet lorem. Duis maximus interdum dui, nec vehicula dui imperdiet vitae. Ut dapibus velit odio. Proin scelerisque eget elit vitae posuere. Mauris sed dui nec est elementum hendrerit. Phasellus tempor iaculis dolor, eget sollicitudin dui aliquam ut. Sed malesuada sem a metus vehicula, quis sodales sapien volutpat. Quisque aliquam orci id felis molestie convallis. Quisque pellentesque, ipsum sed viverra consectetur, est lacus finibus tortor, vel feugiat est enim et nibh. Fusce nec porta risus. Aenean tristique vel nisi facilisis pretium. Praesent tincidunt et ipsum at ultricies. Pellentesque blandit posuere eros ut varius.
`;

progressBar.setAttribute('class', 'progress-bar');

body.append(texto);
body.append(progressBar);

// function para calcular
const calcularPorcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// streams
const scroll$ = fromEvent(document, 'scroll')
  .pipe(map(calcularPorcentajeScroll))
  .pipe(tap(console.log));

scroll$.subscribe(percentage => progressBar.style.width = `${percentage}%`);
