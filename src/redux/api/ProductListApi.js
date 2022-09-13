import axios from "axios";
import { BASE_URL } from "../../Constant";

const ProductListApi = () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}product`,
    params: { categoryID: "aps", keyword: "iphone", country: "US", page: "1" },
    headers: {
      "X-RapidAPI-Key": "337b80d528msh945f28feb6bc9edp103cfbjsn5c6e98b2d9ab",
      "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
    },
  };

  return axios.request(options);
};

export default ProductListApi;
