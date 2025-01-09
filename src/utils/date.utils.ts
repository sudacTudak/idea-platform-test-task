export const checkIsRightDateFormat = (dateStr: string) =>
  /^\d{2}\.\d{2}\.\d{4}$/.test(dateStr);

export const transformDateStrFormat = (dateStr: string) => {
  return dateStr.split('.').reverse().join('-');
};
