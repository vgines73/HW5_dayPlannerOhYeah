$(document).ready(function(){
// current day, month, date using moment.js
var currentDay = moment().format("dddd, MMMM, Do")
$("#currentDay").text(currentDay)

var times = [9, 10, 11, 12, 13, 14, 15, 16, 17]

times.forEach(time => {
    var timeCheck = window.localStorage.getItem(time)
    console.log(timeCheck) // check to see if it shows, shows null

    if (timeCheck === null) {
        window.localStorage.setItem(time, "") // stores the time in local storage
    }
})

// preventDefault for submitting
$("form").on(("submit"), function(e) {
    e.preventDefault();
    console.log(e.target) // see if we can target the form
    console.log(e.target.querySelector("input").getAttribute("id")) // to see if it can save into local storage
    console.log(e.target.querySelector("input").value) // to see if it can save the text entered so we can store into local storage
})

})
