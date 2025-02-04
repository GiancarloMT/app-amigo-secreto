// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];
let elementoInputName;
let elementoButtonAdd;
let elementoNameList;
let elementoResultList;
let elementoLi;
let indiceAleatorio;
let amigoSecreto;
conexionesIniciales();
estadosIniciales();
function conexionesIniciales(){
    elementoInputName = document.getElementById('amigo');
    elementoButtonAdd = document.querySelector('.button-add');
    elementoNameList=document.getElementById('listaAmigos');
    elementoResultList=document.getElementById('resultado');
}
function estadosIniciales(){
    elementoInputName.focus();
    elementoInputName.addEventListener('keyup', function(e){
        e.preventDefault();
        if(e.key==='Enter'){
            elementoButtonAdd.click();    
        }    
    });
}
function agregarAmigo(){
    listaAmigos.push(elementoInputName.value);
    elementoLi=document.createElement('li');
    elementoLi.appendChild(document.createTextNode(listaAmigos[listaAmigos.length-1]));
    elementoNameList.appendChild(elementoLi);
    limpiarInputName();
}
function limpiarInputName(){
    elementoInputName.value='';
    elementoInputName.focus();    
}
function sortearAmigo(){
    indiceAleatorio= generarIndiceAleatorioLista(listaAmigos.length);
    amigoSecreto=listaAmigos[indiceAleatorio];
    elementoNameList.hidden = true;
    elementoLi=document.createElement('li');
    elementoLi.appendChild(document.createTextNode(`El amigo secreto sorteado es: ${amigoSecreto}`));
    elementoResultList.appendChild(elementoLi);
}
function generarIndiceAleatorioLista(n){
    return Math.floor(Math.random()*n);
}