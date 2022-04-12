const arrows = document.querySelector('.arrow')
const speed = document.querySelector('.units')



navigator.geolocation.watchPosition((data) => {
  console.log(data)
})