import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterOutlet } from '@angular/router';
import { SigninService } from '../../services/signin/signin.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterOutlet, MatCheckboxModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule,
    FlexLayoutModule, CommonModule, MatInputModule, FormsModule, MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private signinService: SigninService, private router: Router, private ngZone: NgZone) {}

  title = 'Singin';

  signin: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(9)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.min(9)])
  });

  hide = true;

  get nomeInput() { return this.signin.get('nome'); }
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }
  get passwordConfirmationInput() { return this.signin.get('passwordConfirmation'); }

  cancel() {
    //TODO priscila implementar depois
  }

  addUser() {
    this.signinService.createUser(this.nomeInput?.value, this.emailInput?.value, 
      this.passwordInput?.value)
      .then(response => {
        console.log(response);
        this.ngZone.run(() => {
          this.router.navigateByUrl('/login')
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

}
