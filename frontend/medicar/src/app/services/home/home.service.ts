import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getSchedules() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
    return axios.get('/consultas/');
  }
}
