import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  //token: string = "";

  //constructor(private appService: AppService) {}

  title = 'medicar';

  // signin: FormGroup = new FormGroup({
  //   email: new FormControl('', [Validators.email, Validators.required]),
  //   password: new FormControl('', [Validators.required, Validators.min(3)])
  // });
  // hide = true;
  // get emailInput() { return this.signin.get('email'); }
  // get passwordInput() { return this.signin.get('password'); }

  // getToken() {
  //   this.appService.getRandomToken(this.emailInput?.value, this.passwordInput?.value)
  //     .then(response => {
  //       this.token = response.data.token;
  //       axios.defaults.headers.common['Authorization'] = this.token;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // async ngOnInit() {

  // }

  // ngOnDestroy() {

  // }
  
}
