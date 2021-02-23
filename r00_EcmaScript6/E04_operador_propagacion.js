function sumarCuatro(a,b,c,d){
    return a + b + c + d;
}
let datos = [2,5,3,6];
//let resul = sumarCuatro(datos[0],datos[1],datos[2],datos[3]);
let resul = sumarCuatro(...datos);
console.log("La suma de ",...datos, "es", resul);