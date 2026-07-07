// floor
console.log(Math.floor(45.99));
console.log(Math.floor(88.89));

// ceil()
console.log(Math.ceil(2.000001));



// genarating random number

{
    const max = 89;
    const minNum = 1;
    const result = Math.floor(Math.random() * (max - minNum + 1)) + minNum;
    console.log(result);
}

{
    const maxNumber = 9999;
    const minNumber = 1000;
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    console.log(randomNumber);
}