import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8e5d2dc3e4d5462097b18fdac2dfa944",
  },
});
