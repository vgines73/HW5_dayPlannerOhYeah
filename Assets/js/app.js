$(document).ready(function () {
    // current day, month, date using moment.js
    const currentDay = moment().format("dddd, MMMM, Do");
    $("#currentDay").text(currentDay);

    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // variable for time in military hours
    
    // localStorage for hour and entered text
    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time);
        // console.log(timeCheck); // check to see if it shows, shows null
        const timeId = "#" + time; //time idtag in military time
        const currentHour = moment().hour(); // variable for current hour
        // console.log(currentHour); // gets the current hour
        // console.log(time); // console log the time of the hour

        // if current hour is greater than the time
        if (currentHour > time) { // past
            $(timeId).addClass("past"); // background text turns grey
        } else if (currentHour === time) { //present
            $(timeId).addClass("present"); // background text turns red
        } else if (currentHour < time) { // future
            $(timeId).addClass("future"); // background text turns green
        }
        
        // conditional if time comes back null;  
        if (timeCheck === null) {
            window.localStorage.setItem(time, ""); // stores the time and empty string in local storage
        } else if (timeCheck.length > 0) { // time is greater than zero then;
            $(timeId).attr("value", window.localStorage.getItem(time)); // store the time and entered text
        };
    })

    // preventDefault for submitting button
    $("form").on(("submit"), function (e) {
        e.preventDefault();
       // console.log(e.target) // see if we can target the form
       // console.log(e.target.querySelector("input").getAttribute("id")) // to see if it can save into local storage
       // console.log(e.target.querySelector("input").value) // to see if it can save the text entered so we can store into local storage
        const time = e.target.querySelector("input").getAttribute("id"); //to target time
        const text = e.target.querySelector("input").value // to target the value

        window.localStorage.setItem(time, text); // submits the time and text into local storage
    })
})
