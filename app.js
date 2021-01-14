const clockContainer = document.querySelector('.clock-container')

const getFormatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const updateClock = () => {
  const present = new Date()
  const hours = getFormatTimeUnit(present.getHours())
  const minutes = getFormatTimeUnit(present.getMinutes())
  const seconds = getFormatTimeUnit(present.getSeconds())

  const clockHTML = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000);
