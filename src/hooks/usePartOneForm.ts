import { useState, ChangeEvent, FormEvent } from "react";
import { useFilteredCalls } from "../api/getFilteredCalls";

export const usePartOneForm = () => {
  const {data: tableData, mutate, isSuccess} = useFilteredCalls()

   // state
  const [filterOptions, setFilterOptions] = useState({
    agents: [] as string[],
    startRange: "",
    endRange: "",
  })

  // handler for input change
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const {value, name} = e.target;
    
    setFilterOptions({
      ...filterOptions,
      [name]: value
    })
  }

  // handler for selecting multiple agents
  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    const {value} = e.target;
    
    setFilterOptions({
      ...filterOptions,
      agents: [
        ...filterOptions.agents,
        value
      ]
    })
  }

  // handler for removing the agent from list
  const removeAgent = (index: number) => {
    const updatedAgents = [...filterOptions.agents]

    updatedAgents.splice(index, 1);

    setFilterOptions({
      ...filterOptions,
      agents: updatedAgents
    })
  }
  
  // handler for form submission
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const mutateData = {
      info: {
        filter_agent_list: filterOptions.agents,
        filter_time_range: [+filterOptions.startRange, +filterOptions.endRange],
      }
    }

    mutate(mutateData)
  }

  return {
    submitHandler, tableData, filterOptions, isSuccess, removeAgent, selectChangeHandler, inputChangeHandler
  }
}