import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getSchedules() {
    return axios.get('/consultas/');
  }
}
