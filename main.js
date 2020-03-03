function DaysSince () {

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2017, 9, 20);
const secondDate = new Date();

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)) -1;

document.getElementById("since").innerHTML="It's been " + diffDays + " days since Jungle Inferno";
}