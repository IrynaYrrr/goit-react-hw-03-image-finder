import axios from "axios";

export const getCards =  async(searchString, page) => {
  const response = await axios.get(`https://pixabay.com/api/?q=${searchString}&page=${page}&key=36088783-799e53020b824ac98b477fb5a&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data.hits;
}
