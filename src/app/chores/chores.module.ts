import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcranCorveesComponent } from './components/ecran-corvees/ecran-corvees.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CorveeComponent } from './components/corvee/corvee.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    EcranCorveesComponent,
    CorveeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatGridListModule
  ]
})
export class ChoresModule { }
