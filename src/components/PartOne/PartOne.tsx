import { FC } from "react"
import { useDurationRange } from '../../api/getDurationRange'
import { useListOfAgents } from '../../api/getListOfAgents'
import { PrimaryRangeInput } from "../../globals/PrimaryRangeInput/PrimaryRangeInput"
import { usePartOneForm } from "../../hooks/usePartOneForm"
import { AppData, Table } from "../Table/Table"
import './PartOne.css'

export const PartOne: FC = () => {
  // API calls
  const {data: agentsResponse} = useListOfAgents()
  const {data: durationResponse} = useDurationRange()

  const {filterOptions, submitHandler, selectChangeHandler, removeAgent, inputChangeHandler, tableData, isSuccess} = usePartOneForm()

  let arr: AppData[] = [];

  // when the API call is successful then display the data in table
  if(isSuccess) {
    // @ts-ignore
    arr = tableData?.data.data
  }

  return (
    <div className={"formWrapper"}>
      <form onSubmit={submitHandler} className={'partOneForm'}>
        <PrimaryRangeInput maxLimit={durationResponse?.data.data.maximum.toString() as string} name={"startRange"} label={"Start"} onChange={inputChangeHandler} />
        <PrimaryRangeInput maxLimit={durationResponse?.data.data.maximum.toString() as string} min={filterOptions.startRange} name={"endRange"} label={"End"} onChange={inputChangeHandler} />
  
        <div>
          {filterOptions.agents.map((agent, index) => (
            <button key={index} onClick={(): void => removeAgent(index)}>{agent}</button>
          ))}
        </div>

        <select onChange={selectChangeHandler}>
          <option disabled selected>Select Agent(s)</option>
          {agentsResponse?.data.data.listofagents.map((agent, index) => {
            return (
              <option value={agent} key={index}>{agent}</option>
            )
          })}
        </select>
        <button type={"submit"}>Filter</button>
      </form>

      <Table data={arr} isSuccess={isSuccess} />
    </div>
  )
}
