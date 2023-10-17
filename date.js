const birthDay = new Date('August 19, 1975 23:15:30');
const date1 = birthDay.getDate();
console.log(date1);
// Expected output: 19

// Year 
const moonLanding = new Date('July 20, 69 00:20:18');
console.log(moonLanding.getFullYear());
// Expected output: 1969




// Get Day 
const birthDate = new Date('August 19, 1975 23:15:30');
const day2= birthDate.getDay();
// Sunday - Saturday : 0 - 6

console.log(day2);
// Expected output: 2