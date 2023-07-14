import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcranCorveesComponent } from './chores/components/ecran-corvees/ecran-corvees.component';
import { MenuComponent } from './components/menu/menu.component';
import { EcranRepasComponent } from './repas/components/ecran-repas/ecran-repas.component';
import { EcranCorveesSettingsComponent } from './chores/components/ecran-settings/ecran-settings.component';
import { EcranCorveeComponent } from './chores/components/ecran-corvee/ecran-corvee.component';


const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'repas', component: EcranRepasComponent},
  { path: 'corvee/:corveeId', component: EcranCorveeComponent},
  { path: 'corvees', component: EcranCorveesComponent},
  { path: 'corvees-settings', component: EcranCorveesSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
