export const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

export const currentDate = () => {
  const now = new Date().toLocaleDateString("id-ID", options);
  return now
};

export const yesterdayDate = () => {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toLocaleDateString("id-ID", options);
};
