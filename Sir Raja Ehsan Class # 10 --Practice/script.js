let Days_ofaWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let d = new Date();
let day = d.getDay()

let monthInAyear = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul","Aug","Sep","Oct","Nov","Dec"];
let mo = new Date();
let month = mo.getMonth()

let dt = new Date()
let Datee = dt.getDate()

let yr = new Date()
let year = yr.getFullYear()

let t = new Date();
let time = t.toLocaleTimeString();
var inputTime = time;
var timeParts = inputTime.split(' ');
var period = timeParts[1];
var [hours, minutes] = timeParts[0].split(':').map(Number);

if (period === "AM") {
    // console.log("Good morning!");
    if (hours === 12) {
        // console.log("It's midnight.");
    } else {
        // console.log(`It's ${hours}:${minutes} AM.`);
    }
} else{
    // console.log("Good evening!");
    if (hours === 12) {
        // console.log("It's noon.");
    } else {
        // console.log(`It's ${hours}:${minutes} PM.`);
    }
}

let acc_to_Sir = (`${Days_ofaWeek[day]} ${Datee}th ${monthInAyear[month]}, ${year} - ${hours}:${minutes} PM.` )
document.write(acc_to_Sir)