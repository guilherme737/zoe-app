import { UsuarioComponent } from './usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule    
  ],
  declarations: [UsuarioComponent]
})
export class UsuarioModule { }
