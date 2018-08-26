import { UsuarioComponent } from './usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioPesquisarComponent } from './usuario-pesquisar/usuario-pesquisar.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    UsuarioRoutingModule    
  ],
  declarations: [
        UsuarioComponent, 
        UsuarioPesquisarComponent
    ],
    providers : [
        UsuarioService
    ]
})
export class UsuarioModule { }
