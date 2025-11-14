//Promise

function addTen(num){
const promise = new Promise((resolve, reject)=>{
    //executor

    setTimeout(()=>{
        // const num = 10;
        if (typeof num === 'number') {
            resolve("success");
        } else {
            reject("num is not a number");
        }

        
        //resolve("success"); // fulfilled => promiseResult => "success"
        // reject("reason why error"); // rejected => promiseResult => "reason why error"
    }, 2000);
})
return promise;
}
const p = addTen(0);
p.then((value)=>{
    console.log("Promise resolved with value: ", value); 
    // Output after 2 seconds: Promise resolved with value: success
    // const newP = addTen(value);
    // addTen(20).then((value)=>{
    //     console.log("Chained Promise resolved with value: ", value);
    // })
    // return newP;
    return addTen(20);
}).then((value)=>{
    console.log("Chained Promise resolved with value: ", value);
    return addTen(undefined);  // this err will be caught in the catch block
}).then((value)=>{
    console.log("Chained Promise resolved with value: ", value);
    return addTen(10);
}).catch((error)=>{
    console.log("Promise rejected with reason: ", error);
}); // can attach catch method here as well => promise chaining

// result : output 10 , 20 and error message in the catch block


// then method
// if promise is resolved => then method is called
// promise.then((value)=>{
//     console.log("Promise resolved with value: ", value); 
//     // Output after 2 seconds: Promise resolved with value: success
// }).catch((error)=>{
//     console.log("Promise rejected with reason: ", error);
// }); // can attach catch method here as well => promise chaining

// // catch method
// // if promise is rejected => catch method is called

// promise.catch((error)=>{
//     console.log("Promise rejected with reason: ", error);
//     // Output after 2 seconds: Promise rejected with reason: num is not a number
// });
