import axios from "axios";

const httpClient = axios.create({
  baseURL: 'https://paguebem-api.chacha.vps-kinghost.net/api'
});

export { httpClient };