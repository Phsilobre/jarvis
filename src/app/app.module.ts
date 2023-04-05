import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRepasReducer } from './ngrx/app-repas/app-repas.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { RepasModule } from './repas/repas.module';
import { RepasReducer } from './ngrx/meals/meals.reducer';
import { ChoresModule } from './chores/chores.module';
import { ChoresReducer } from './ngrx/chores/chores.reducer';
import { ShoppingComponent } from './shopping/components/shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuLinkComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RepasModule,
    ChoresModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('appRepas', AppRepasReducer),
    StoreModule.forFeature('meals', RepasReducer),
    StoreModule.forFeature('chores', ChoresReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
