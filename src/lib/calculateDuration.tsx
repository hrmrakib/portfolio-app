export function calculateDuration(range: string): string {
  const [startStr, endStr] = range.split(" - ");

  const monthMap: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  function parseDate(str: string): Date {
    if (str === "Present") return new Date();

    const [month, year] = str.split(", ");
    return new Date(Number(year), monthMap[month]);
  }

  const startDate = parseDate(startStr);
  const endDate = parseDate(endStr);

  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let result = "";

  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""}`;
  }

  if (remainingMonths > 0) {
    if (result) result += ", ";
    result += `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  }

  return result || "0 month";
}
