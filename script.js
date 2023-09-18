const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// const img = document.createElement('img');
// img.setAttribute('src', 'https://acdn.mitiendanube.com/stores/001/715/015/products/pop-socket-i-love-michis-51-59d90c9b8b2271f06516686501285977-640-0.webp');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado : " + suma;
};



function cambiarImg (){
    document.getElementById(img)
    img.setAttribute('src', 'https://d1kvlp4er3agpe.cloudfront.net/resources/images/groups/8/0/4/0/2/720_m1y41etcho.jpeg');
}

function imgInicial (){
    document.getElementById(img)
    img.setAttribute('src', 'https://acdn.mitiendanube.com/stores/001/715/015/products/pop-socket-i-love-michis-51-59d90c9b8b2271f06516686501285977-640-0.webp');
}