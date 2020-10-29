//probably need to make this a function and loop it
// set day, month, date using moment.js
var currentDay = document.querySelector("#currentDay")
currentDay.textContent = moment().format("dddd, MMMM Do");

// create row for the calendar
var createRow = document.createElement("row")
// create column for time
var createColumnTime = document.createElement("timeDiv")
// create column for entering text
var createColumnText = document.createElement("textDiv")
// create column for save button
var createColumnSaveButton = document.createElement("buttonDiv")
// append columns to row
Row.append(createColumnTime, createColumnText, createColumnSaveButton)
// append row to container
var container = document.getElementsByClassName(".container");
container.append(row)
// imma need local storage to store the text ARRGGGHHH!!!

// need to add colors to text column

// working column save button