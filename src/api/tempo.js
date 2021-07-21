import axios from "axios";

const api = axios.create({
  baseURL : 'https://api.tvmaze.com/search/show?q=star%20wars'
});

export default api;