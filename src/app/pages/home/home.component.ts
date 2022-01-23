import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service'
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _loginService: LoginService, private _router: Router, private _notificacion: NotificationService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this._loginService.logOut();
    this._router.navigate(['/login']);
    this._notificacion.showInfo("Sesión cerrada. Tenga un buen dia :)", "");
  }

  seccionUsuarios(){
    this._router.navigate(['/usuarios']);
  }

  infoJuegos(){
    this._router.navigate(['/infojuegosdemesa']);
  }

  agregarUsuario(){
    this._router.navigate(['/add-usuario']);
  }

}
