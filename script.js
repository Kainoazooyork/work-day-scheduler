// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('button').on('click',function(){
    console.log(this);
    console.log($(this).siblings('textarea').val())
    console.log($(this).parent("div").attr("id"))
    localStorage.setItem($(this).parent("div").attr("id"), $(this).siblings('textarea').val())
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  let timeBlocks = document.querySelectorAll(".time-block")
  for (let i = 0; i < timeBlocks.length; i++) {
    let currentHour = dayjs().format("HH")
    let blockHour = timeBlocks[i].id.substring(5)
    console.log(currentHour)
    console.log(blockHour)
    if(currentHour > blockHour){
      timeBlocks[i].classList.add("past")
    } else if(currentHour < blockHour){
      timeBlocks[i].classList.add("future")
    } else {
      timeBlocks[i].classList.add("present")
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  let textareas = document.querySelectorAll("textarea")
  for (let i = 0; i < textareas.length; i++) {
      textareas[i].value = localStorage.getItem(textareas[i].id)
  }
  // $('.description').val(localStorage.getItem($(this).parent("div").attr("id")))
  // TODO: Add code to display the current date in the header of the page.
$('#currentDay').text(dayjs().format('MM DD YYYY'))
});

