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

  token: string = "";

  constructor(private appService: AppService, private router: Router, private ngZone: NgZone) {}

  title = 'Login';

  login: FormGroup = new FormGroup({
    // email: new FormControl('', [Validators.email, Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(9)])
  });
  hide = true;
  get emailInput() { return this.login.get('email'); }
  get passwordInput() { return this.login.get('password'); }

  getToken() {
    this.appService.getRandomToken(this.emailInput?.value, this.passwordInput?.value)
      .then(response => {
        this.token = response.data.token;
        axios.defaults.headers.common['Authorization'] = this.token;
        this.ngZone.run(() => {
          this.router.navigateByUrl('')
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  signin() {
    //Implementar depois TODO Priscila
    this.ngZone.run(() => {
      this.router.navigateByUrl('/signin')
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
