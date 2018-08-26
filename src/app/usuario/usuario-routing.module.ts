import { UsuarioPesquisarComponent } from './usuario-pesquisar/usuario-pesquisar.component';
import { UsuarioComponent } from './usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario-pesquisar', component: UsuarioPesquisarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
