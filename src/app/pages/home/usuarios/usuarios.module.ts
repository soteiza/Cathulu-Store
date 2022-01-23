import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { PasswordPipe } from 'src/app/Pipes/password.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MonedaPipe } from 'src/app/Pipes/moneda.pipe';



@NgModule({
  declarations: [
    UsuariosComponent,
    PasswordPipe,
    MonedaPipe
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
