export function toDateString(value: Date): string {
  return `${value.getFullYear()}-${value.getMonth}-${value.getDate}`;
}

export function dateStringToDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-');
  return new Date(Number.parseInt(year), Number.parseInt(month), Number.parseInt(day));
}
