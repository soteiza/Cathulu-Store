import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  formUser: any;
  emailFormat = '^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$';

  constructor(private _service: UserService, private _notificacion: NotificationService, private _router:Router) { }

  ngOnInit(): void {
    this.formUser = new FormGroup({
      nombre: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.minLength(5)
        ]
      )),
      correo: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern(this.emailFormat)
        ]
      )),
      fechaNacimiento: new FormControl('', Validators.required),
      sueldo: new FormControl('', Validators.required),
    })
  }

  agregarUsuario(){
    const {nombre, correo, fechaNacimiento, sueldo} = this.formUser.value;
    Swal.fire({
      title: `Seguro que desea agregar al personal ${nombre} ?  `,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._service.createUser({nombre, correo, fechaNacimiento, sueldo}).subscribe(data => {
          if(data){
            Swal.fire('Personal creado!', 'El personal fue creado correctamente. Favor verifique en la sección "Ver Personal"', 'success')
            this.formUser.reset();
          }else{
            Swal.fire('Error', 'Ha ocurrido un error interno', 'error')
          }
        });
        
      } else if (result.isDenied) {
        Swal.fire('Personal sin crear', 'El personal no fue creado', 'warning')
      }
    })
  }

}
