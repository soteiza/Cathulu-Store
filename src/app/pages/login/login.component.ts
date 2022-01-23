import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/Models/login-dto';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: any;
  objLogin: any = new LoginDto("", "");
  emailFormat = '^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$';

  constructor(private _service: LoginService, private route: Router, private _notification: NotificationService) { }

  ngOnInit(): void {
    this._service.logOut();
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.pattern(this.emailFormat)
        ]
      )),
      password: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
        ]
      ))
    });
  }

  onSubmit(){
    this.objLogin = new LoginDto(this.formLogin.get("email").value, this.formLogin.get("password").value);

    this._service.loginUser(this.objLogin).subscribe( (information:any) => {
      this.formLogin.get("email").enable();
      this.formLogin.get("password").enable();

      if(information.id == 0){
        this._notification.showWarning("Por favor verifique la información ingresada.", "");
      this._notification.showError("El usuario o contraseña son incorrectos", "Error");
      }else{
        this.formLogin.reset();
        this._service.saveUser(information);
        console.log(information);
        this.route.navigate(['/']);
        this._notification.showSuccess('Bienvenido al sistema de Cathulu Store', "");
      }
    });

    /*if(this.formLogin.get("email").value != 'aaronoteiza@gmail.com' && this.formLogin.get("password").value != '16081993'){
      this._notification.showWarning("Por favor verifique la información ingresada.", "");
      this._notification.showError("El usuario o contraseña son incorrectos", "Error");
      
    }else{
      this.objLogin = new LoginDto(this.formLogin.get("email").value, this.formLogin.get("password").value)
      this.formLogin.reset();
      this._service.saveUser(this.objLogin);
      this.route.navigate(['/']);
      this._notification.showSuccess('Bienvenido al sistema de Cathulu Store', "");
    }*/

    this.formLogin.get("email").enable();
    this.formLogin.get("password").enable();

  }
}
