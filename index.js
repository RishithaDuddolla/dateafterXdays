const addDays = require('date-fns/addDays')
const dateAfterXDays = days => {
  const returnDate = addDays(new Date(2020, 7, 22), days)
  return `${returnDate.getDate()}-${
    returnDate.getMonth() + 1
  }-${returnDate.getFullYear()}`
}
module.export = dateAfterXDays
console.log(dateAfterXDays(2))
