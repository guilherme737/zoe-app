import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { AppRoutingModule } from './/app-routing.module';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent, 
    NavSidebarComponent   
  ],
  imports: [
    BrowserModule,
    UsuarioModule,    
    DashboardModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
