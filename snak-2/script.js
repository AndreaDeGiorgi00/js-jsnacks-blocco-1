/*In un array sono contenuti i nomi degli invitati
alla festa del grande Gatsby, l’utente inserisce il 
suo nome tramite un input.comunicagli se può partecipare
o no alla festa.*/

//creo la lista degli invitati

const invitati = ["luca" , "marco" , "giorgio"];

//targhettizzo il bottone il valore del nome in input e dove andare a scrivere la risposta

const button = document.getElementById("btn");
const target = document.getElementById("rispostaSpace");



button.addEventListener("click" , function(){
    //creo una variabile per il testo in uscita
    let risposta = "devi inserire il nome";
    const nome = document.getElementById("nome").value.trim();
    //mi assicuro che sia stato scritto qualcosa all-interno dell'input 
    if(nome){
        //creo un ciclo for che si ripete tante volte quanto la lunghezza della lista degli invitati
        for(i=0 ; i < invitati.length ; i++){
            //controllo se è contenuto nella stringa degli invitati
            if( nome === invitati[i]){
                risposta = "sei il benvenuto";
            };
            //quando ho finito la lista preparo il messaggio di uscita
            if (i === invitati.length - 1  &&  risposta === "devi inserire il nome"){
                risposta = "mi dispiace ma lei non è in lista";
            };
        };
    };
    
    //stampo la risposta
    target.innerHTML = risposta;

});