//Declaring const list-group class in html
const ul = document.getElementById("fizzbuzz-list");

//Declating variables 
let fizz = "Fizz"
let buzz = "Buzz"


//cycle for numbers from 1 to 100 
for ( let i = 1; i<= 100; i++) {
    let item = ""
    
    if (i % 3 === 0 && i % 5 === 0){
        console.log (fizz+buzz)
        // item = `<li class="list-group-item"> ${fizz + buzz} </li>`
    }
    else if ( i % 3  === 0) {
        console.log(fizz)
        // item = `<li class="list-group-item"> ${fizz}</li>`
    }
    else if ( i % 5  === 0){
        console.log(buzz)
        // item = `<li class="list-group-item"> ${buzz}</li>`
    }   
    else 
    console.log (i)
    // item = `<li class="list-group-item">${i}</li>`
    
    ul.innerHTML += item;
}



