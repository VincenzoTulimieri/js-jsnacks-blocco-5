const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const oddNumbers =nums.filter((element)=>{
    if(element % 2 === 0){
        return true
    }
})
console.log(oddNumbers)
// Risultato: [2, 8, 4, 12]