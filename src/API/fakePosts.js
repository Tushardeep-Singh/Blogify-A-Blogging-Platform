// Author: Tushardeep Singh

import axios from "axios";

// creating axios instance with custom config
export const fakePostApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
