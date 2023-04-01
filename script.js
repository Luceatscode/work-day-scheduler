$(function () {
  // Lines 3-8 are for our adding the date at top of page in correct format
  const today = dayjs()
  const hour = today.hour()
  const dayOfTheWeek = today.format('dddd')
  const month = today.format('MMMM')
  const date = today.format('DD')
  const year = today.format('YYYY')
  // Grabbed current day element 
  const currentDayElement = document.getElementById('currentDay')
  const phrase = `${dayOfTheWeek} - ${month} ${date}, ${year}`
  currentDayElement.innerHTML = phrase

  // Start loop for styles, click event, and local storage
  const timeBlocks = document.querySelectorAll('.time-block')

  timeBlocks.forEach(function (item) {
    const saveButton = item.getElementsByTagName('button')[0]
    const saveTextArea = item.getElementsByTagName('textarea')[0]

    saveButton.addEventListener('click', function (event) {
      localStorage.setItem(item.id, saveTextArea.value);
    })

    const rowHour = Number(item.id.split('-')[1])
    const hourlyEventValue = localStorage.getItem(item.id);
     
    // Condition to persist data inputed on hour block
    if (hourlyEventValue !== null) {
      saveTextArea.value = hourlyEventValue
    }
    // Conditions to change color of row
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