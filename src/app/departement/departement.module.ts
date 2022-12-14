import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { DepartementformComponent } from './departementform/departementform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepartementComponent,
    DepartementformComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    FormsModule
  ]
})
export class DepartementModule { }
