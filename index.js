#!/usr/bin/env node

const args = process.argv.slice(2);
const name = args[0] || "Developer";

const currentHour = new Date().getHours();
let timeGreeting = "Hello";

if (currentHour < 12) {
    timeGreeting = "Good Morning";
} else if (currentHour < 17) {
    timeGreeting = "Good Afternoon";
} else {
    timeGreeting = "Good Evening";
}

console.log(`\n✨ ${timeGreeting}, ${name}! Welcome to the Engineering Lifecycle Challenge. ✨\n`);
console.log(`Execution Time: ${new Date().toLocaleString()}\n`);