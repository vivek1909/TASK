import axios from "axios";

export const publicAPI = axios.create({
  baseURL: 'https://damp-garden-93707.herokuapp.com/'
})