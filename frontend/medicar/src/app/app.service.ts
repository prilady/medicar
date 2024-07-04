import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  getRandomToken(username: string, password: string) {
    return axios.post('users/login', {
      "username": username,
      "password": password
    });
  }
}

