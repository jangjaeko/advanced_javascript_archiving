// handling synchronous and asynchronous errors in JavaScript

// function add(a,b, callback) {
//     setTimeout(() => {
//             const sum = a+b;
//         callback(sum);
//     }, 3000);
// }
// add(2,3,(value)=>{
//     console.log(value);
// }); // Output after 3 seconds: 5


// example with ordering food from delivery service

function orderFood(callback){
    setTimeout(()=>{
        const food = 'Pizza';
        callback()
    }, 3000);
}

function coolDownFood(food, callback){
    setTimeout(()=>{
        const coolDownFood = `cool down ${food}`;
        callback(coolDownFood);
    }, 2000);
}

function freezeFood(food, callback){
    setTimeout(()=>{
        const freezeFood = `freeze ${food}`;
        callback(freezeFood);
    }, 2000);
}

orderFood((food)=>{
    console.log(`Received order: ${food}`);
    coolDownFood(food, (readyFood)=>{
        console.log(`Your food is ready to eat: ${readyFood}`);
    });
    freezeFood(readyFood, (frozenFood) => {
        console.log(`Your food is frozen: ${frozenFood}`);
    });
}); 
// Output after 3 seconds: Received order: Pizza
// Output after 2 more seconds: Your food is ready to eat: cool down Pizza
// Output after 2 more seconds: Your food is frozen: freeze cool down Pizza