import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { RepasModule } from './repas/repas.module';
import { ChoresModule } from './chores/chores.module';
import { ShoppingComponent } from './shopping/components/shopping/shopping.component';
import { ChoresState } from './ngrx/chores/chores.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { MAT_DATE_LOCALE } from '@angular/material/core';

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
    NgxsModule.forRoot(
      [
        ChoresState
      ],
      { developmentMode: !environment.production }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: false
    })
    /*
    TODO: à migrer
    StoreModule.forRoot({}),
    StoreModule.forFeature('appRepas', AppRepasReducer),
    StoreModule.forFeature('meals', RepasReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })*/
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
