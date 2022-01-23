import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsuarioComponent } from './add-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: AddUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUsuarioRoutingModule { }
