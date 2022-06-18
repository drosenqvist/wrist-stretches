const init = () => {
  const start = document.querySelector('#start')
  const currentStretch = document.querySelector('#currentStretch')
  const currentStretchHeaderText = document.querySelector('#currentStretchHeaderText')
  const timer = document.querySelector('#timer')
  const currentTimeHeaderText = document.querySelector('#currentTimeHeaderText')
  const stretches = ['Prayer Position', 'Supinated Flexor', 'Reverse Prayer Position', 'Pronated Extensor', 'Thumb Adductor']

  currentStretch.textContent = stretches[0]
  timer.textContent = 30

  let time = 30
  let stretchIndex = 0
  let breakBool = true
  let stretch = stretches[stretchIndex]
  let interval = null

  const runTimer = () => {
    time--
    timer.textContent = time

    if (time <= 0 && breakBool === true) {
      currentStretchHeaderText.textContent = 'Next up...'
      currentTimeHeaderText.textContent = 'Begins in...'

      stretchIndex++
      stretch = stretches[stretchIndex]
      currentStretch.textContent = stretch
      time = 6
      breakBool = false
    }
    
    if (time <= 0 && breakBool === false) {
      if (stretchIndex > stretches.length - 1) clearInterval(interval)

      currentStretchHeaderText.textContent = 'Current stretch...'
      currentTimeHeaderText.textContent = 'Hold for...'

      time = 30
      breakBool = true
    }
  }

  start.addEventListener('click', () => { interval = setInterval(runTimer, 1000) })
}

init()