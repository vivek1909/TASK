import { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { publicAPI } from "./publicAPI"

interface Response {
  data: {
    listofagents: number[];
  },
  message: string;
  status_code: string;
}

export const getListOfAgentsAPI = async(): Promise<AxiosResponse<Response>> => {
  return await publicAPI.get('/getlistofagents');
}

export const useListOfAgents = ():UseQueryResult<AxiosResponse<Response>, unknown> => {
  return useQuery(['agentsList'], getListOfAgentsAPI, {
    refetchOnWindowFocus: false,
  })
}