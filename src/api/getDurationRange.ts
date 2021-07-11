import { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { publicAPI } from "./publicAPI"

interface Response {
  data: {
    maximum: number;
    minimum: number;
  },
  message: string;
  status_code: string;
}

export const getDurationRangeAPI = async(): Promise<AxiosResponse<Response>> => {
  return await publicAPI.get('/getdurationrange');
}

export const useDurationRange = ():UseQueryResult<AxiosResponse<Response>, unknown> => {
  return useQuery(['durationRange'], getDurationRangeAPI, {
    refetchOnWindowFocus: false,
  })
}