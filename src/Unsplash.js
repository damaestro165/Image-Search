import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID gqjUssnQPLaeZDeDLSe26bvT6n7hymhoMqISVLPHu5Y",
  },
});
