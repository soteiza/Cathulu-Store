import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsuarioComponent } from './add-usuario.component';
import { AddUsuarioRoutingModule } from './add-usuario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddUsuarioComponent
  ],
  imports: [
    CommonModule,
    AddUsuarioRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddUsuarioModule { }
