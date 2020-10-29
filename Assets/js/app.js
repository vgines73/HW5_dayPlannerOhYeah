//probably need to make this a function and loop it
// set day, month, date using moment.js
var currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do");

// create row for the calendar
var createRow = document.createElement("row");

// create column for time
var createColumnTime = document.createElement("timeDiv"); // div for time
var columnSizeTime = getElementsByClassName(".col-md-2"); // class container size
// need to enter the time 9am-5pm and append to columnTime
createColumnTime.append(columnSize);

// create column for entering text
var createColumnText = document.createElement("textDiv"); // div for text
var columnSizeText = getElementsByClassName(".col-md-8"); // class container size
// need to enter text area and append to columnText
createColumnText.append(columnSizeText)

// create column for save button
var createColumnSaveButton = document.createElement("buttonDiv"); // div for button
var columnSizeSaveButton = getElementsByClassName(".col-md-2"); // class container size
// need to add button and icon and append to columnSaveButton
createColumnSaveButton.append(columnSizeSaveButton);

// append columns to row
Row.append(createColumnTime, createColumnText, createColumnSaveButton);

// append row to container
var container = document.getElementsByClassName(".container");
container.append(row);

// imma need local storage to store the text ARRGGGHHH!!!

// need to add colors to text column

// working column save button