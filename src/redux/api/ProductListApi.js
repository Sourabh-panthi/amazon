import axios from "axios";
import { BASE_URL } from "../../Constant";

const ProductListApi = () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}product`,
    params: { categoryID: "aps", keyword: "iphone", country: "US", page: "1" },
    headers: {
      "X-RapidAPI-Key": "844bb4d3f3mshe539ce0d9cdc19cp1db50cjsn5990ce11d0f1",
      "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
    },
  };

  return axios.request(options);
};

export default ProductListApi;
