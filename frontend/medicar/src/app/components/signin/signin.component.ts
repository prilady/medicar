import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';

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
  title = 'Singin';

  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(9)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.min(9)])
  });

  hide = true;

  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }
  get passwordConfirmationInput() { return this.signin.get('passwordConfirmation'); }

  cancel() {
    //TODO priscila implementar depois
  }

  addUser() {
    //TODO priscila implementar depois
  }

}
