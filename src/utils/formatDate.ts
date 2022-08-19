import {format, formatDistanceToNow } from 'date-fns';
import {ptBR} from 'date-fns/locale';
export const formatDate = (date: Date) => {
  const longDateTime = format(date, "d 'de' MMMM 'às' HH:mm'h'", {locale: ptBR});
  const dateRelativeNow = formatDistanceToNow(date, {locale: ptBR,
  addSuffix: true});
  const dateToIso = date.toISOString();

  return {longDateTime, dateRelativeNow, dateToIso};
}






