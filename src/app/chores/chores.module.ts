import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcranCorveesComponent } from './components/ecran-corvees/ecran-corvees.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CorveeComponent } from './components/corvee/corvee.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxLongPress2Module } from 'ngx-long-press2';
import { EcranCorveeComponent } from './components/ecran-corvee/ecran-corvee.component';

@NgModule({
  declarations: [
    EcranCorveesComponent,
    CorveeComponent,
    EcranCorveeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatGridListModule,
    NgxLongPress2Module
  ]
})
export class ChoresModule { }
