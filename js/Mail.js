let mail = prompt('Inserisci la tua mail:');

const lUtenti = ['marco93@gmail.com','mattia93@gmail.com', 'elena93@gmail.com', 'ginevra91@gmail.com', 'manfredi91@gmail.com', 'ettore93@gmail.com', 'vault93@gmail.com'];

let utente;
let login;
let shownM;
for(x=0; x<lUtenti.length; x++){
    utente = lUtenti[x];

    
    if (mail == utente){
        console.log("Benvenuto " + utente);
        shownM = document.getElementById("messaggio").innerHTML = "Benvenuto " + utente;
        login= true;
    }
}

if(login!=true) {
    console.log("Credenziali Errate!")
    shownM = document.getElementById("messaggio").innerHTML = "Credenziali Errate!";
}



