//Declaring const list-group class in html
const ul = document.querySelector("ul.list-group")

//Declating variables 
let fizz = "Fizz"
let buzz = "Buzz"

//cycle for numbers from 1 to 100 
for ( let i = 1; i<= 100; i++) {
    if ((( i % 3 ) === 0) && (( i % 5 ) === 0)){
        console.log (fizz+buzz)
    }
    else if (( i % 3 ) === 0) {
        console.log(fizz)
    }
    else if (( i % 5 ) === 0){
        console.log(buzz)
    }   
    else 
    console.log (i)
}

