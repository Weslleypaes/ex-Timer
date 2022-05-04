function getTimeFromSeconds(seconds){
const date = new Date(seconds * 1000);
return date.toLocaleTimeString('pt-BR',{
    hour12:false,
    timeZone: 'GMT'
});
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
   timer = setInterval(function (){
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
   }, 1000);
}
document.addEventListener('click', function (e){
    console.log(e.target);
})


iniciar.addEventListener('click', function(event) {
    relogio.style.color = 'red';
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    relogio.style.color = 'black';
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    relogio.style.color = 'black';
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});