import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfojuegosdemesaComponent } from './infojuegosdemesa.component';

const routes: Routes = [
  {
    path: '',
    component: InfojuegosdemesaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfojuegosdemesaRoutingModule { }
