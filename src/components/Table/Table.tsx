import { FC } from "react"
import { usePagination } from "../../hooks/usePagination"
import { useSort } from "../../hooks/useSort"
import { Pagination } from "../Pagination/Pagination"
import './Table.css'

export interface AppData {
  agent_id: string,
  call_id: number,
  call_time: number,
}

interface Props {
  data: AppData[];
  isSuccess: boolean;
}

export const Table: FC<Props> = ({data, isSuccess}) => {
  const {items, requestSort} = useSort(data)
  const {currentPage, previousPage, nextPage, getPaginatedData} = usePagination({data: items})

  return (
    <div className={'tableWrapper'}>
    <table>
      <caption>Agent Details</caption>
      <thead>
        <tr>
          <th><button onClick={():void => requestSort('agent_id')}>Agent Name</button></th>
          <th><button onClick={():void => requestSort('call_id')}>Call ID</button></th>
          <th><button onClick={():void => requestSort('call_time')}>Call Duration</button></th>
        </tr>
      </thead>
      {isSuccess && <tbody>
        {getPaginatedData().map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.agent_id}</td>
              <td>{item.call_id}</td>
              <td>{item.call_time}</td>
            </tr>
          )
        })}
      </tbody>}
    </table>
    {isSuccess && data.length && (
      <Pagination currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} />
    )}

    {!data.length && (
      <h1>No data</h1>
    )}
    </div>
  )
}
