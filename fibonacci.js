function fibonaci(num) { 
    let serie = [0 ,1] ;
    for (let i = 2; i <= num; i++) {
        serie.push(serie[ i - 1] + serie[i - 2]);
    }

    return [serie, serie[num]]

}

console.log("Serie completa: ", fibonaci(16)[0])
console.log("Resultado de serie: ", fibonaci(16)[1])
