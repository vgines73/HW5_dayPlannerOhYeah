$(document).ready(function () {
    // current day, month, date using moment.js
    const currentDay = moment().format("dddd, MMMM, Do");
    $("#currentDay").text(currentDay);

    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    // localStorage for hour and entered text
    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time);
        //console.log(timeCheck); // check to see if it shows, shows null

        const currentHour = moment().hour(); // variable for current hour
        //console.log(currentHour); // gets the current hour
        //console.log(time); // console log the time of the hour

        // if current hour is greater than the time
        if (currentHour > time) { // past
            $(`#${time}`).addClass("past"); // background text turns grey
        } else if (currentHour === time) { //present
            $(`#${time}`).addClass("present"); // background text turns red
            $(`#${time}`).attr("disabled", true); // disable entering text
        } else if (currentHour < time) { // future
            $(`#${time}`).addClass("future"); // background text turns green

        }


        if (timeCheck === null) {
            window.localStorage.setItem(time, ""); // stores the time and empty string in local storage
        } else if (timeCheck.length > 0) {
            $(`#${time}`).attr("value", window.localStorage.getItem(time)); // not working; text doesn't enter
        };


    })

    // preventDefault for submitting
    $("form").on(("submit"), function (e) {
        e.preventDefault();
       // console.log(e.target) // see if we can target the form
        const time = (e.target.querySelector("input").getAttribute("id")) // to see if it can save into local storage
        const text = (e.target.querySelector("input").value) // to see if it can save the text entered so we can store into local storage
    })

})
