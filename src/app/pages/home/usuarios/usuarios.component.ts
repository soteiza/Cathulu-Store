import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any = Array<any>();
  usuariosCopia: any = Array<any>();
  formUser: any;

  constructor(private _service: UserService, private _notificacion: NotificationService, private _router:Router) { }

  ngOnInit(): void {
    this.obtieneUsuarios();
    this.formUser = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      sueldo: new FormControl('', Validators.required)
    })
  }

  obtieneUsuarios(){
    this._service.getAllUsers().subscribe(data =>{
      this.usuarios = data;
      this.usuariosCopia = data;
      console.log(data);
    });
    
  }

  filtraUsuario(nombre:any){
    this.usuariosCopia = this.usuarios.filter((x:any) => x.nombre.includes(nombre.target.value));
  }

  eliminarUsuario(nombre:any, id:number): void{
    Swal.fire({
      title: `Seguro que deseas eliminar al personal ${nombre} ?  `,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._service.deleteUser(id).subscribe(data => {
          if(data){
            Swal.fire('Personal eliminado!', 'El personal fue eliminado correctamente', 'success')
            this.obtieneUsuarios();
          }else{
            Swal.fire('Error', 'Ha ocurrido un error interno', 'error')
          }
        });
        
      } else if (result.isDenied) {
        Swal.fire('Personal sin eliminar', 'El personal no fue eliminado', 'warning')
      }
    })
  }

  agregarUsuario(){
    const {nombre, correo, fechaNacimiento, sueldo} = this.formUser.value;
    this._service.createUser({nombre, correo, fechaNacimiento, sueldo}).subscribe(data => {
      if(data){
        this._notificacion.showSuccess("Usuario creado con éxito", "");
        this.obtieneUsuarios();
      }else{
        this._notificacion.showError("Error al crear al usuario", "Error");
      }
    });
  }

  
  

}
