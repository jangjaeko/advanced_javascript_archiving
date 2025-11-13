// sychrounous and asynchronous code examples


console.log(1);

setTImeoute(() => {
    console.log(2);
}, 1000); //in webApis, setTimeout is handled by the browser's Web APIs

console.log(3);

// Output: 1 3 2 (after 1 second)

