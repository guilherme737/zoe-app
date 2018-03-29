import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: 'usuario', pathMatch: 'full' },
    // { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
    { path: '**', redirectTo: 'pagina-nao-encontrada' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
