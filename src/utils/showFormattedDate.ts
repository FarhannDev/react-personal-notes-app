/* eslint-disable @typescript-eslint/no-unused-vars */

const showFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', { timeZone: "Asia/Jakarta",
  dateStyle: "full",})
}

export { showFormattedDate}