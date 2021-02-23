function sumarCuatro(...valores){
    var total =0
    for(let n of valores){
        total += n;
    }
    return total;
}
let resul = sumarCuatro(2,5,3,6,4);
console.log("La suma es", resul);