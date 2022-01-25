import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'

dayjs.extend(relativeTime);
dayjs.extend(utc);

const utc2date = (datetime: string): Dayjs => {
  const d = dayjs.utc(datetime);

  return dayjs()
    .year(d.year())
    .month(d.month())
    .date(d.date())
    .endOf('date');
}

export { dayjs, utc2date };
