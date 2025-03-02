// for generate random color for the body section

document
  .getElementById("theme-btn")
  .addEventListener("click", function (event) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    document.getElementById(
      "body"
    ).style.backgroundColor = `rgb(${red}, ${green}, ${blue} )`;
  });

// call for the 1st compleat button
getBtnClickResultById("btn-1st");
// call for the 2nd compleat button
getBtnClickResultById("btn-2nd");
// call for the 3rd compleat btn
getBtnClickResultById("btn-3");
// call for the 4th compleat btn
getBtnClickResultById("btn-4");
// call for the 5th compleat btn
getBtnClickResultById("btn-5");
// call for the 6th compleat btn
getBtnClickResultById("btn-6");

// for clear history

// getting access in the question page
document
  .getElementById("discover-new")
  .addEventListener("click", function (event) {
    window.location.href = "./blog.html";
  });

// getting the date and day in the top of the main section
const day = document.getElementById("day-top-main");
const date = document.getElementById("date-top-main");
const currentDate = new Date();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const currentDay = weekdays[currentDate.getDay()];
const thisDate = currentDate.getDate();
const thisMonth = Months[currentDate.getMonth() - 1];
const thisYear = currentDate.getFullYear();
const outputDate = [thisDate, thisMonth, thisYear];

day.innerText = currentDay;
date.innerText = outputDate;
