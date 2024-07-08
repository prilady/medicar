import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
    axios.defaults.baseURL = 'http://localhost:3000/';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
   }

  getRandomToken(username: string, password: string) {
    return axios.post('users/login', {
      "username": username,
      "password": password
    });
  }

  leaveToken() {
    axios.defaults.headers.common['Authorization'] = "";
  }
  
}