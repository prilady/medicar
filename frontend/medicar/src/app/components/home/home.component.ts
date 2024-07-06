import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlexLayoutModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private appService: AppService){}

  logout() {
    this.appService.leaveToken();
  }
}
