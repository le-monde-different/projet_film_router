import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisiteurRoutingModule } from './visiteur-routing.module';
import { VisiteurComponent } from './visiteur.component';
import { HomeVisiteurComponent } from './home-visiteur/home-visiteur.component';
import { FormsModule, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    VisiteurComponent,
    HomeVisiteurComponent
  ],
  imports: [
    CommonModule,
    VisiteurRoutingModule,
    FormsModule
  ]
})
export class VisiteurModule { }
