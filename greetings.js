// A program that greets according to the time.
// 06am-12pm -> Morning
// 12pm-06pm -> Afternoon
// Otherwise -> Evening

// NOTE:
// For simplicity, I've used 24 hours time format

let hour = 10;

if (hour >= 6 && hour < 12) console.log("Good Morning!");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon");
else console.log("Good Evening");

