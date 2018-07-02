let a = parseFloat(prompt('Введіть коефіцієнт А'));
let b = parseFloat(prompt('Введіть коефіцієнт B'));
let c = parseFloat(prompt('Введіть коефіцієнт C'));


function solveQuadratic(a, b, c) {
    let d = Math.pow(b,2)-4*a*c;
    if(d>0){
        let x1 = (-b-Math.sqrt(d))/(2*a);
        let x2 = (-b+Math.sqrt(d))/(2*a);
        return 'x1 = ' +x1 +', x2 = '+x2 ;
    } else if(d===0){
        let x3 = (-b)/(2*a);
        return 'x = ' +x3;
    } else{
        return alert("Квадратне рівняння немає розв'язків");
    }
}
 let result = solveQuadratic(a,b,c);
 alert(result);