import { AxiosError, AxiosResponse } from "axios"
import { useMutation, UseMutationResult } from "react-query"
import { publicAPI } from "./publicAPI"

interface Request {
  info: {
    filter_agent_list: string[],
    filter_time_range: number[]
  }
}

interface Response {
  data: {
    agent_id: string,
    call_id: number,
    call_time: number,
  }[];
  message: string;
  status_code: string;
}

export const getFilteredCallsAPI = (request: Request): Promise<AxiosResponse<Response>> => {
  return publicAPI.post('/getfilteredcalls', request)
}

export const useFilteredCalls = (): UseMutationResult<AxiosResponse<Response>, AxiosError, Request> => {
  return useMutation(getFilteredCallsAPI)
}