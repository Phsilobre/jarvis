import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcranRepasComponent } from './components/ecran-repas/ecran-repas.component';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EcranListeRepasConnusComponent } from './components/ecran-liste-repas-connus/ecran-liste-repas-connus.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
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
