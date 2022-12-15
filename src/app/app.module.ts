import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UniversitesComponent } from './universites/universites.component';
import { ComponentsModule } from './components/components.module';
import { ContratsComponent } from './contrats/contrats.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EtudiantLayoutComponent } from './layouts/etudiant-layout/etudiant-layout.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UniversitesComponent,
    LoginComponent,
    RegisterComponent,
    EtudiantLayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    UsersModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
