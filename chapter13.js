// async await example

//async
// making a function async will always return a promise

async function getData(){
    return {
        name: "John",
        age: 30
    }
}
// console.log(getData()); 
// Output: Promise { { name: 'John', age: 30 } }

async function getDatas(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name: "Doe",
                age: 25
            })
        }, 2000);
    });
}   

// console.log(getDatas());
// Output: Promise { <pending> } (after 2 seconds: Promise { { name: 'Doe', age: 25 } })

// await
// await can only be used inside an async function
// it will wait for the promise to resolve before moving to the next line

async function printData(){
    const data = await getDatas(); // wait until the promise is resolved
    console.log(data);
}

printData(); 