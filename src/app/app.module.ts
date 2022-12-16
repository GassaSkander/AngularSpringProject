import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { ReactiveFormsModule } from '@angular/forms';
import { ContratsModule } from './contrats/contrats.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { EquipesModule } from './equipes/equipes.module';
import { ProfileComponent } from './layouts/profile/profile.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ListEquipeEtudiantComponent } from './equipes/list-equipe-etudiant/list-equipe-etudiant.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent, UniversitesComponent,
    LoginComponent,
    RegisterComponent,
    EtudiantLayoutComponent,
    ProfileComponent,
    AdminLayoutComponent,


],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      tapToDismiss:true
      }),
    UsersModule,
    ContratsModule,

    HttpClientModule,
    MatSlideToggleModule,

    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
