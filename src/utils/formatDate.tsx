export function formatDate(date) {
  const dateObj = new Date(date);

  return `${
    dateObj.getMonth() + 1
  }/${dateObj.getDate()}/${dateObj.getFullYear()}`;
}
