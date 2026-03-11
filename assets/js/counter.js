document.addEventListener("DOMContentLoaded", () => {

  const counterUp = window.counterUp.default
  const counters = document.querySelectorAll(".counter")

  counters.forEach(counter => {
    counterUp(counter, {
      duration: 3000,
      delay: 16
    })
  })

})