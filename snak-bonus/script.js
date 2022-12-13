/*L'utente inserisce un numero di 4 cifre in un input.
Calcola la somma di tutte le cifre che compongono il numero
e stampala in pagina.*/


//seleziono il bottone, testo in uscita , testo in entrata e sommatoria
const bottone = document.getElementById("btn");
const numeri = document.getElementById("testo");
const target = document.getElementById("risposta");
let sommatoria = 0;

//creo un validatore per aiutarmi con il testo in uscita
let validatore = 0;


//quando clicco sul bottone prendo la stringa di numeri e la trasformo in una array 
bottone.addEventListener("click" , function(){
    let risposta = "hai inserito male i dati"
    calcolatore = [...numeri.value];
    //mi assicuro che siano 4 valori
    if(calcolatore.length == 4){
        for(i=0 ; i < calcolatore.length; i++){
            //mi assicuro siano numeri
            if(!isNaN(calcolatore[i])){
                sommatoria += parseInt(calcolatore[i])
                risposta = "la somma è uguale a :"
            }else{
                validatore = 1;
            }
            
        }
        console.log(sommatoria)
       
    }else{
        validatore = 1;
    }

    target.innerText = validatore == 0 ? risposta + sommatoria : risposta;
    //reimposto i valori al loro stato iniziale 
    validatore = 0;
    sommatoria = 0;
    

});