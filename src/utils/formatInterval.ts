type DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export function formatDateInterval(
  initialDateISO: string,
  finalDateISO: string,
  locale: 'en-US' | 'pt-BR',
): string {
  const initialDate: Date = new Date(initialDateISO);
  const finalDate: Date = new Date(finalDateISO);

  const dateOptions: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const hourOptions: DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: locale === 'pt-BR' ? false : true,
  };

  const dateFormatter = new Intl.DateTimeFormat(locale, dateOptions);
  const hourFormatter = new Intl.DateTimeFormat(locale, hourOptions);

  const formatedDate: string = dateFormatter.format(initialDate);
  const initialHourFormated: string = hourFormatter.format(initialDate);
  const finalHourFormated: string = hourFormatter.format(finalDate);

  return `${formatedDate} · ${initialHourFormated} - ${finalHourFormated}`;
}
