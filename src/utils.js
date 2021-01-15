function isValidDate(d) {
  var date = new Date(d);
  return date instanceof Date && !isNaN(date);
}

function getDateElements(date) {
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  return [day, month, year];
}
function sameDay(d1, d2) {
  const [d1_day, d1_month, d1_year] = getDateElements(d1);
  const [d2_day, d2_month, d2_year] = getDateElements(d2);

  if (d1_day === d2_day && d1_month === d2_month && d1_year === d2_year) {
    return true;
  }
  return false;
}
function padDate(date, elFn) {
  return date[elFn]().toString().padStart(2, 0);
}
function formatDate(date) {
  if (!isValidDate(date)) {
    return date;
  }
  const cur_date = new Date();
  const given_date = new Date(date);

  // if same day
  if (sameDay(cur_date, given_date)) {
    return `${padDate(given_date, "getHours")}:${padDate(
      given_date,
      "getMinutes"
    )}`;
  }

  var yesterday = new Date(new Date().setDate(cur_date.getDate() - 1));
  if (sameDay(given_date, yesterday)) {
    return "Yesterday";
  }

  var [d, m, y] = getDateElements(given_date);
  return `${padDate(given_date, "getDate")}/${(m + 1)
    .toString()
    .padStart(2, 0)}/${y}`;
}

export { formatDate };
