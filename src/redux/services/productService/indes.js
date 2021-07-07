import axios from "axios";

export default class ProductService {
  fetchProductsList = async () => {
    try {
      let response = await axios.get(
        "http://loccalhost:8080/api/prodduct/get-product"
      );
      return response.data;
    } catch (error) {
      console.log("Fetch Product list", error);
      return [];
    }
  };
}
