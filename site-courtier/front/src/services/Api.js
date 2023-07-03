// //connector to hit the back
// import axios from "axios";


// export default () => {
//   return axios.create({
//     baseURL: `http://localhost:8084`,
//     // headers: {
//     //   Authorization: `Bearer ${store.state.CurrentUser.token}`,
//     // },
//   });
// };


import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
