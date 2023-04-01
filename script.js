// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const today = dayjs()
  // const hour = 12 
  // change number on line 6 to test functionality of calendar for dev testing
  const hour = today.hour()
  const dayOfTheWeek = today.format('dddd')
  const month = today.format('MMMM')
  const date = today.format('DD')
  const year = today.format('YYYY')

  const currentDayElement = document.getElementById('currentDay')
  const phrase = `${dayOfTheWeek} - ${month} ${date}, ${year}`
  currentDayElement.innerHTML = phrase
  

  const timeBlocks = document.querySelectorAll('.time-block')
  timeBlocks.forEach(function(item){
    console.log(item.id, 'starting a new row')
   console.log(item) 
   const saveButton = item.getElementsByTagName('button')[0]
    console.log(saveButton)

    const saveTextArea = item.getElementsByTagName('textarea')[0]
    // console.log(saveTextArea.value)

    saveButton.addEventListener('click', function(event){
      localStorage.setItem(item.id, saveTextArea.value);
      console.log(saveTextArea.value)



    })

    const rowHour = Number(item.id.split('-')[1])

    if (rowHour === hour) {
      item.classList.add('present')
    }

    if (rowHour < hour) {
      item.classList.add('past')
    }

    if (rowHour > hour) {
      item.classList.add('future')
    }
  })
});

document.querySelectorAll('.saveBtn').forEach(function(buttonEl) {
  buttonEl.addEventListener('click', function(){

  })
})






// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
