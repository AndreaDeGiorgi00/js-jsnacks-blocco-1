/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
 (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti.*/


//creo una variabile per la somma e seleziono il target dove stampare il risultato
let sommatoria = 0;
const target = document.getElementById("contenitore");
//eseguo 10 volte un prompt grazie al for
for(i=1 ; i <= 10 ; i++){

    let val = parseInt(prompt("inserisci il numero"));
    sommatoria += val;

    if(i === 10){
        target.innerText = `la somma totale è : ${sommatoria}`;
    };
}