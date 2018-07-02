const a = parseFloat(prompt('Введіть коефіцієнт А'));
const b = parseFloat(prompt('Введіть коефіцієнт B'));
const c = parseFloat(prompt('Введіть коефіцієнт C'));


function solveQuadratic(a, b, c) {
    const d = Math.pow(b,2)-4*a*c;
    if(d>0){
        const x1 = (-b-Math.sqrt(d))/(2*a);
        const x2 = (-b+Math.sqrt(d))/(2*a);
        return 'x1 = ' +x1 +', x2 = '+x2 ;
    } else if(d===0){
        const x3 = (-b)/(2*a);
        return 'x = ' +x3;
    } else{
        return alert("Квадратне рівняння немає розв'язків");
    }
}
 const result = solveQuadratic(a,b,c);
 alert(result);