import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterOutlet } from '@angular/router';
import axios from 'axios';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { Token } from '../../models/globals.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatInputModule,
    MatCheckboxModule, ReactiveFormsModule,
    FormsModule, MatButtonModule, MatIconModule,
    FlexLayoutModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  token: Token = new Token();

  constructor(private appService: AppService, private router: Router, private ngZone: NgZone) {}

  title = 'Login';

  login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(9)])
  });
  hide = true;
  get emailInput() { return this.login.get('email'); }
  get passwordInput() { return this.login.get('password'); }

  getToken() {
    this.appService.getRandomToken(this.emailInput?.value, this.passwordInput?.value)
      .then(response => {
        this.token.str = 'Token ' + response.data.token;
        localStorage.setItem('access_token', this.token.str);
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
        this.ngZone.run(() => {
          this.router.navigateByUrl('')
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  signin() {
    this.ngZone.run(() => {
      this.router.navigateByUrl('/signin')
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
