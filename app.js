const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()

  console.log(present)
}

setInterval(updateClock, 1000);