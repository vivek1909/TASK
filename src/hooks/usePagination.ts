import { useState } from "react";
import { AppData } from "../components/Table/Table";

interface Props {
  data: AppData[]
}

export const usePagination = ({data}: Props) => {
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = () => {
    setCurrentPage((old) => Math.max(old - 1, 1))
  }

  const nextPage = () => {
    setCurrentPage((old) => old + 1)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * limit - limit;
    const endIndex = startIndex + limit;

    return data.slice(startIndex, endIndex)
  }

  return {
    limit, currentPage, previousPage, nextPage, getPaginatedData
  }
}