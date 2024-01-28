import { SortEnum } from './filter.enums'

export function sortObjects<T>(key: keyof T, items: T[], sort: SortEnum): T[] {
  if (!items) return [];

  items = items.sort((a, b) => {
    if (Number.isInteger(a[key] as number) && Number.isInteger(b[key] as number)) {
      return (a[key] as number) - (b[key] as number);
    } else {
      const fa = `${a[key]}`.trim().toLowerCase();
      const fb = `${b[key]}`.trim().toLowerCase();
      if (fa < fb) return -1;
      if (fa > fb) return 1;
      return 0;
    }
  });

  if (sort === SortEnum.DESC) items = items.reverse();

  return items;
}

