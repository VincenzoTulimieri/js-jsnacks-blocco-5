const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
let newNumbers=numbers.map((element)=>{
    return element + 1
})
console.log(newNumbers)

// Risultato: [3, 9, 5, 8, 3, 88]