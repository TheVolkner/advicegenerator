window.onload = start;

//WHEN YOU LOAD THE PAGE IN THE FIRST TIME IT SHOWS AN RANDOM ADVICE
// AND LET THE USER SHOW ANOTHER WITH THE BUTTON
async function start(){

    let respuesta = await fetch('https://api.adviceslip.com/advice');

    let json = await respuesta.json();
 
    let idAdvice = document.getElementById('adviceNumber');
 
    let adviceText = document.getElementById('adviceText');
 
    adviceText.innerHTML = '"' + json.slip.advice + '"';
 
    idAdvice.innerHTML = 'Advice # ' + json.slip.id;

    let btn = document.getElementById('btnAdvice');

    btn.addEventListener('click',generateAdvice,false);


}

//CALLING ADVICE SLIP API AND SHOWING IN SCREEN THE ID AND THE ADVICE RANDOMLY.
async function generateAdvice(){

   let respuesta = await fetch('https://api.adviceslip.com/advice');

   let json = await respuesta.json();

   let idAdvice = document.getElementById('adviceNumber');

   let adviceText = document.getElementById('adviceText');

   adviceText.innerHTML = '"' + json.slip.advice + '"';

   idAdvice.innerHTML = 'Advice # ' + json.slip.id;

}