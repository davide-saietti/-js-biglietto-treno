/* 
consegna:

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

Prima di scrivere il codice impostate il ragionamento nei commenti!

Bonus:
Applicare de controlli sull'input dell'utente 


1. dichiarare le variabili e le costanti.
2. calcolare le variabili dei prezzi finali
3. impostare un controllo iniziale
4. se controllo viene validato calcolare per esclusione il prezzo finale in base all'età dell'utente





*/
let agePrompt = prompt('Inserisci la tua età');
const priceKm = 0.21;
let kmPrompt = prompt('Inserisci i km che percorrerai');
let age = parseInt(agePrompt)
let km = parseInt(kmPrompt)
let totalPrice = priceKm * km;
let underageUserDiscount = totalPrice * 20 /100;
let overagedUserDiscount = totalPrice * 40 / 100;
let overagedUserPrice = totalPrice - overagedUserDiscount;
let underageUserPrice = totalPrice - underageUserDiscount;




if(isNaN(age) || isNaN(km)){
    console.log('Write only numbers!')
}
else{
    if( age > 65){
    console.log(`${overagedUserPrice.toFixed(2)}$`)
}
else if (age < 18){
    console.log(`${underageUserPrice.toFixed(2)}$`)
}
else{
    console.log(`${totalPrice.toFixed(2)}$`)
}
}