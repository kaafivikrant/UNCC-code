function pow2(n) {
    return 2 << (n-1);
}

// function BN(bnd){ // ~621 ms
//     // bnd = bnd.split(""); // ~ 1.7s
//     bnd = Array.from(bnd, Number); // ~ 1.3s
//     // bnd = [...bnd]; // ~ 1.75s
//     let sum = 0;
//     for(let i=bnd.length-1, sum = 0 , j = 0; i>=0; i--) { // ~ 680ms
//         // sum += bnd[i] * Math.pow(2, j++); // ~ 1.3s
//         sum += bnd[i] * pow2(j++);
//     }

//     /* ~ 684ms
//         var len = bnd.length;
//         var j = 0;
//         while(len--){
//             sum += bnd[len] * pow2(j++);
//         }
//     */

//     return sum % 1 == 0? sum: "Invalid Binary Number";
// }

// function BN(bnd) { // 374ms
//     let sum = 0, j = 0;
//     for (let i = bnd.length - 1; i >= 0; i--) {
//       sum += parseInt(bnd[i]) * pow2(j++);
//     }
//     return sum % 2 === 0 ? sum : "Invalid Binary Number";
// }

function BN(bnd){ // 185ms
    let sum = 0;
    for (let i = bnd.length - 1, j = 0; i >= 0; i--, j++) {
        if (bnd[i] === '1') {
            sum += pow2(j);
        } else if (bnd[i] !== '0') {
            return "Invalid Binary Number";
        }
    }
    return sum;
}


console.time('doSomething')


for (let i = 0; i < 1000000; i++) {
    // Generate test case
    let binaryNumber = Math.floor(Math.random() * 1000000).toString(2);

    // Call BN function
    BN(binaryNumber);
}

console.timeEnd('doSomething')

