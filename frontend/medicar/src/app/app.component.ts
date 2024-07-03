import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AppModule } from './app.module';
import { FlexLayoutModule } from '@angular/flex-layout';



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

  //hostElement = inject(ElementRef).nativeElement;
  ngOnInit() {

	}

  
  title = 'medicar';

  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  //get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); } 
}
