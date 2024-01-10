//Declaring const list-group class in html
const ul = document.getElementById("fizzbuzz-list");

//Declating variables 
let fizz = "Fizz"
let buzz = "Buzz"
let variante = "Fizzbuzz"


const gridHtml = document.getElementById ("grid")                           //aggiunto a lezione
console.log(gridHtml)                                                       //aggiunto a lezione


//cycle for numbers from 1 to 100
for ( let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        gridHtml.innerHTML += `<div class="box box-red">${variante}</div>`  //aggiunto a lezione
        console.log (variante) 
    }
    else if ( i % 3  === 0){
        gridHtml.innerHTML += `<div class="box box-green">${fizz}</div>`    //aggiunto a lezione
        console.log(fizz) 
    }
    else if ( i % 5  === 0){
        gridHtml.innerHTML += `<div class="box box-yellow">${buzz}</div>`   //aggiunto a lezione
        console.log(buzz)
    }   
    else 
    gridHtml.innerHTML += `<div class="box">${variante}</div>`              //aggiunto a lezione
    console.log (i)
}


