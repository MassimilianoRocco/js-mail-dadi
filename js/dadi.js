let x = Math.floor(Math.random() * 6 +1);
let y = Math.floor(Math.random() * 6 +1);
let result;

console.log('Il dado del giocatore è: ' + x);
console.log('Il dado del computer è: ' + y);


if(x>y){
    console.log('Hai vinto!');
    risultato = document.getElementById("risultato").innerHTML = "Ha vinto il giocatore con " + x + " sul dado.";
}
else if(x<y){
    console.log('Ha vinto il computer!');
    risultato = document.getElementById("risultato").innerHTML = "Ha vinto il giocatore con " + y + " sul dado.";
}
else{
    console.log('Pareggio!');
    risultato = document.getElementById("risultato").innerHTML = "Pareggio! Il giocatore e il computer ottengono lo stesso risultato: " + x + ".";
}