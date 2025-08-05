const dayjs = require('dayjs')

const now = dayjs()
console.log(now.toString())

console.log(now.format())
console.log(now.format("YYYY-MM-DD"))
console.log(now.format("YYYY년 MM월 DD일"))

const date1 = dayjs("2024-08-05")
const date2 = dayjs("2025-08-05")

console.log(date2.diff(date1,"day")) 
console.log(date2.diff(date1,"month"))


