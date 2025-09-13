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







*/
let age = 17;
const priceKm = 0.21;
let km = 15;
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
    console.log(overagedUserPrice)
}
else if (age < 18){
    console.log(underageUserPrice)
}
else{
    console.log(totalPrice)
}
}