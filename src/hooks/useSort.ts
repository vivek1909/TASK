import { useMemo, useState } from "react";
import { AppData } from "../components/Table/Table";

export const useSort = (items: AppData[], config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        // @ts-ignore
        if (a[sortConfig.key] < b[sortConfig.key]) {
          // @ts-ignore
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }

        // @ts-ignore
        if (a[sortConfig.key] > b[sortConfig.key]) {
          // @ts-ignore
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  // @ts-ignore
  const requestSort = (key) => {
    let direction = 'ascending';
    // @ts-ignore
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    // @ts-ignore
    setSortConfig({ key, direction });
  }

  return { items: sortedItems, requestSort };
}