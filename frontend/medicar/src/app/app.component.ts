import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppService } from './app.service';


import axios from "axios";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatInputModule,
    MatCheckboxModule, ReactiveFormsModule, ReactiveFormsModule,
    FormsModule, CommonModule, MatButtonModule, MatIconModule,
    FlexLayoutModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  token: string = "";

  constructor(private appService: AppService) {}

  title = 'medicar';

  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }

  getToken() {
    this.appService.getRandomToken(this.emailInput?.value, this.passwordInput?.value)
      .then(response => {
        this.token = response.data.token;
      })
      .catch(error => {
        console.log(error);
      });
  }

  async ngOnInit() {

    //axios.defaults.baseURL = 'http://localhost:3000/';

    let AUTH_TOKEN = "";
    // getToken().then(function (results) {
    //   let data = results.data;
    //   AUTH_TOKEN = data.token;
    // });

    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  ngOnDestroy() {

  }
  
}
