// 1. Generate Date objects

let date1 = new Date(); // making a Current date and time
console.log(date1); // e.g., 2024-06-15T12:34:56.789Z

let date2 = new Date('1997-06-26'); // 1997,6,26, 31,31 / '1997,06,26', '1997/06/26' are also available
console.log(date2); // 1997-06-26T00:00:00.000Z

// 2. Time stamp  
// The number of milliseconds since January 1, 1970, 00:00:00 UTC

let ts1 = date1.getTime();
console.log(ts1); // e.g., 1718476496789

let date3 = new Date(ts1);
console.log(date3); // same as date1

// 3. get individual components of the date

let year = date1.getFullYear();
let month = date1.getMonth() + 1; // Months are zero-indexed so we should add +1 
let day = date1.getDate();
let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(`Year: ${year}, Month: ${month}, Day: ${day}`); // e.g., Year: 2024, Month: 6, Day: 15


//4. edit individual components of the date

date1.setFullYear(2026);
date1.setMonth(11); // December (0-11)
date1.setDate(25); // 25th
date1.setHours(10);
date1.setMinutes(30);
date1.setSeconds(0);

// 5. format date to string

console.log(date1.toDateString()); // e.g., Wed Dec 25 2026
console.log(date1.toLocaleDateString()); // e.g., 12/25/2026 (format may vary based on locale)

