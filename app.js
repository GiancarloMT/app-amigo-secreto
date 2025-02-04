// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];
let elementoInputName;
let elementoButtonAdd;
let elementoNameList;
let elementoResultList;
let elementoLi;
let indiceAleatorio;
let amigoSecreto;
let nombreAmigo;
let datosValidados;
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
    datosValidados=validacionDatos();
    if(datosValidados){
        listaAmigos.push(elementoInputName.value);
        elementoLi=document.createElement('li');
        elementoLi.appendChild(document.createTextNode(listaAmigos[listaAmigos.length-1]));
        elementoNameList.appendChild(elementoLi);
    }
    else{
        alert('Por favor, ingrese un nombre válido');
    }
    limpiarInputName();
}

function validacionDatos(){
    nombreAmigo=elementoInputName.value;
    if(nombreAmigo.length ==0 || /[0-9]/.test(nombreAmigo))
        return false;
    else
        return true; 
}
function limpiarInputName(){
    elementoInputName.value='';
    elementoInputName.focus();    
}
function sortearAmigo(){
    if(listaAmigos.length!=0){
    indiceAleatorio= generarIndiceAleatorioLista(listaAmigos.length);
    amigoSecreto=listaAmigos[indiceAleatorio];
    elementoNameList.hidden = true;
    elementoLi=document.createElement('li');
    elementoLi.appendChild(document.createTextNode(`El amigo secreto sorteado es: ${amigoSecreto}`));
    elementoResultList.appendChild(elementoLi);
    }
    else{
        alert('Aún no ingresó amigos a la lista');
    }
}
function generarIndiceAleatorioLista(n){
    return Math.floor(Math.random()*n);
}