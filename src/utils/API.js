import axios from "axios";

axios.defaults.baseURL = 'http://sebapp.ir:3001/api/v1/';

export const singupApi = (data) => axios.post("users", data)


export const SearchFilterApi = ({query , area}) => axios.get(`collages/?q=${query}&area=${area}&skip=0&limit=10`)