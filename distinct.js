function distinctValues (A) {
    if (A.length === 2) {
        return A[0] == A[1] ? 1 : 2;
    }

    if (A.length < 2) {
	    return A.length == 1 ? 1 : 0;
	}

    let arrDistinct = [];

    for(let i = 0; i < A.length; i++){
        let distinct = true;

        if (arrDistinct.length == 0) {
            arrDistinct.push(A[i]);
            distinct = false;
        } else {
            for (let j = 0; j < arrDistinct.length; j++) {
                if (A[i] === arrDistinct[j]) {
                    distinct = false;
                    break;
                }
            }
            if (distinct) {
                arrDistinct.push(A[i]);
            }
        }
    }
    return arrDistinct.length;
}

let arr = [2, 1, 1, 2, 3, 1];
console.log(distinctValues(arr));
document.getElementById("result").innerHTML = distinctValues(arr);