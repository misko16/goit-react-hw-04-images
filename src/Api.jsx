import axios from "axios";

const request = ({ query, page }) => {
  const apiKey = "37763432-319a8e0ed827dc5543f3404e4";
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(url);
};

export default request;