function func(x) {

    
    if (x === 0) {
        return 1;
    }

    
    else {
        return x * func(x - 1);
    }
}

const num = 3;


if (num > 0) {
    let result = func(num);
    console.log(result);
}
