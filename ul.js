function thresholdFormat(locale, scale, specifier) {
  const formatter = new Intl.NumberFormat(locale, { notation: "compact" });

  return function (number) {
    if (Math.abs(number) >= scale) {
      return formatter.format(number);
    } else {
      return number.toLocaleString(locale, specifier);
    }
  };
}
