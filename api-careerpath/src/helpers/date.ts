export const addMinutes = (date: Date, mins: number) => {
  return new Date(date.getTime() + mins * 1000);
};
