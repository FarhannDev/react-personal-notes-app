// eslint-disable-next-line @typescript-eslint/no-explicit-any
const showFormattedDate = (date: any) => {
  return new Date(date).toLocaleDateString('id-ID', { timeZone: "Asia/Jakarta",
  dateStyle: "full",})
}

export { showFormattedDate}