export const getTime = () => {
  let message = ''
  let hour = new Date().getHours()
  console.log(hour)
  if (hour <= 12) {
    message = 'Good morning!'
  } else if (hour <= 18) {
    message = 'Good afternoon!'
  } else {
    message = 'Good evening!'
  }
  return message
}
