function dateFormatter(date) {
  let newDate = date.toLocaleString().split(',')[0]
  newDate = newDate.split('/')
  if(newDate[0] < 10) newDate[0] = "0" + newDate[0]
  if(newDate[1] < 10) newDate[1] = "0" + newDate[1]
  let temp = newDate[0]
  newDate[0] = newDate[1]
  newDate[1] = temp
  newDate = newDate.join('/')
  return newDate
}

module.exports = dateFormatter