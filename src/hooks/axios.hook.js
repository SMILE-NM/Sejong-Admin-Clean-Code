import axios from 'axios';

const useAxios = async (url, method, data, contentType) => {
  axios.defaults.withCredentials = true;
  let response;
  switch (method) {
    case 'GET':
      response = await axios.get(url);
      break;
    case 'POST':
      response = await axios.get(url, data, contentType);
      break;
    case 'DELETE':
      response = await axios.get(url, data, contentType);

    default:
      response = 'error';
      break;
  }
};
