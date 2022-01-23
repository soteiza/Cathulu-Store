import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children:[
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: DashboardComponent
      },
      {
        path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path: 'infojuegosdemesa', loadChildren: () => import('./infojuegosdemesa/infojuegosdemesa.module').then(m => m.InfojuegosdemesaModule)
      },
      {
        path: 'add-usuario', loadChildren: () => import('./usuarios/add-usuario/add-usuario.module').then(m => m.AddUsuarioModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
