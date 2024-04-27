// var bnd = "1011";
// bnd = bnd.split("");

// console.log(bnd)

function pow2(n) {
    return 2 << (n-1);
}

function BN(bnd){
    // bnd = bnd.split(""); // ~ 1.7
    bnd = Array.from(bnd, Number); // ~ 1.3
    // bnd = [...bnd]; // ~ 1.75
    let sum = 0;
    for(let i=bnd.length-1, sum = 0 , j = 0; i>=0; i--) { // ~ 680ms
        // sum += bnd[i] * Math.pow(2, j++); // ~ 1.3s
        sum += bnd[i] * pow2(j++);
    }

    /* ~ 684ms
        var len = bnd.length;
        var j = 0;
        while(len--){
            sum += bnd[len] * pow2(j++);
        }
    */

    return sum % 1 == 0? sum: "Invalid Binary Number";
}


console.time('doSomething')


for (let i = 0; i < 1000000; i++) {
    // Generate test case
    let binaryNumber = Math.floor(Math.random() * 1000000).toString(2);

    // Call BN function
    BN(binaryNumber);
}

console.timeEnd('doSomething')

