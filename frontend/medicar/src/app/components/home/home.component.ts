import { Component, NgZone } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppService } from '../../app.service';
import { HomeService } from '../../services/home/home.service';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Schedule } from '../../globals/globals';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


 //= [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlexLayoutModule, MatCardModule, MatIconModule, MatListModule, CommonModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private appService: AppService, private homeService: HomeService){}

  logout() {
    this.appService.leaveToken();
  }

  schedule: Schedule[] = [];

  displayedColumns: string[] = ['especialidade', 'profissional', 'data', 'hora'];

  schedulesList() {
    this.homeService.getSchedules().then(response => {
      console.log(response);
      this.schedule = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.schedulesList();
  }

  ngOnDestroy() {

  }
}
