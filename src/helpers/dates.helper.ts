export const options = {
  year: 'numeric' as 'numeric',
  month: '2-digit' as '2-digit',
  day: '2-digit' as '2-digit',
};

export const currentDate = () => {
  const now = new Date().toLocaleDateString("id-ID", options);
  return now
};

export const customDateBeforeToday = (minusDate: number) => {
  let date = new Date();
  date.setDate(date.getDate() - minusDate);
  return date.toLocaleDateString("id-ID", options);
};

