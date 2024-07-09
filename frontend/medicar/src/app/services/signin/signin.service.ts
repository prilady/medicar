import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SigninService {

  constructor() {}

  createUser(username: string, email: string, password: string) {
    return axios.post('users', {
      "username": username,
      "email": email,
      "password": password
    });
  }
  
}
