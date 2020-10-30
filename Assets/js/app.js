
var currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format("dddd, MMMM, Do");
for (let i = 9; i < 18; i++) {
console.log()
}


$("form").on(("submit"), function(e) {
    e.preventDefault();
    console.log(e.target)
})