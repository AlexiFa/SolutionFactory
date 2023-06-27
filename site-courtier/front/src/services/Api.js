//connector to hit the back
import axios from "axios";


export default () => {
  return axios.create({
    baseURL: `http://localhost:8084`,
    // headers: {
    //   Authorization: `Bearer ${store.state.CurrentUser.token}`,
    // },
  });
};
