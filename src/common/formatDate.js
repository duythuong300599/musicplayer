function formatDate(date) {
  const stringDate = new Date(date * 1000).toLocaleDateString("vi-VN");
  return stringDate;
}

export default formatDate;
