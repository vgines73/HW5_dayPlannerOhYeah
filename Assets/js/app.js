$(document).ready(function(){
    var currentDay = document.querySelector("#currentDay");
    currentDay.textContent = moment().format("dddd, MMMM, Do");
    for (let i = 9; i < 18; i++) {
        console.log(currentDay)
    }
})