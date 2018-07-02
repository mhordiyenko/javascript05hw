let A = parseFloat(prompt('Введіть коефіцієнт А'));
let B = parseFloat(prompt('Введіть коефіцієнт B'));
let C = parseFloat(prompt('Введіть коефіцієнт C'));

function Discriminator(A, B, C) {
    let D = Math.pow(B,2)-4*A*C;
    if(D>0){
        let x1 = (-B-Math.sqrt(D))/2*A;
        let x2 = (-B+Math.sqrt(D))/2*A;
        return alert('Корені рівняння x1,x2 = '+ x1 + ',' + x2);
    } else if(D===0){
        let x3 = (-B)/2*A;
        return alert('Корінь рівняння x = '+ x3);
    } else{
        return alert("Квадратне рівняння немає розв'язків");
    }
}
 let result = Discriminator(A, B, C);