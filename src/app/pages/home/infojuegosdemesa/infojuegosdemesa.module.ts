import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InfojuegosdemesaRoutingModule } from './infojuegosdemesa-routing.module';
import { InfojuegosdemesaComponent } from './infojuegosdemesa.component';


@NgModule({
  declarations: [
    InfojuegosdemesaComponent
  ],
  imports: [
    CommonModule,
    InfojuegosdemesaRoutingModule,
    ReactiveFormsModule
  ]
})
export class InfojuegosdemesaModule { }
