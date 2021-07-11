import { FC } from "react"
import './Pagination.css'

interface Props {
  currentPage: number;
  previousPage: () => void; 
  nextPage: () => void;
}

export const Pagination: FC<Props> = ({currentPage, previousPage, nextPage}) => {
  return (
    <div className={'paginationWrapper'}>
      <button onClick={previousPage} className={'paginationButton'}>Previous</button>
      <span>{currentPage}</span>
      <button onClick={nextPage} className={'paginationButton'}>Next</button>
    </div>
  )
}
