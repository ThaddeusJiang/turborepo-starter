export const numberFormat = (
  value: number,
  locale: string = "ja-JP",
  options: Intl.NumberFormatOptions = {}
) => {
  return new Intl.NumberFormat(locale, options).format(value);
};
