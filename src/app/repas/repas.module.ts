import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcranRepasComponent } from './components/ecran-repas/ecran-repas.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EcranListeRepasConnusComponent } from './components/ecran-liste-repas-connus/ecran-liste-repas-connus.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EcranAjoutRepasComponent } from './components/ecran-ajout-repas/ecran-ajout-repas.component';


@NgModule({
  declarations: [
    EcranRepasComponent,
    EcranListeRepasConnusComponent,
    EcranAjoutRepasComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    SharedModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
  ],
  exports: [
    EcranRepasComponent
  ]
})
export class RepasModule { }
