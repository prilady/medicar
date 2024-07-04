import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';

function getToken() {
    return axios.post('users/login', {
      "username": "intmed",
      "password": "challenge"
    });
  }

  let AUTH_TOKEN = "";
 getToken().then(function (results) {
    let data = results.data;
    AUTH_TOKEN = data.token;
  });

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export class Globals {};