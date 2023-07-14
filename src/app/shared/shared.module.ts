import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ChoreCategoryPipe } from './pipes/chore-category.pipe';
import { NgxLongPress2Module } from 'ngx-long-press2';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ContextMenuComponent,
    ChoreCategoryPipe
  ],
  imports: [
    CommonModule,
    DatePipe,
    NgxLongPress2Module,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  exports: [
    ContextMenuComponent,
    ChoreCategoryPipe,
    DatePipe,
    NgxLongPress2Module,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class SharedModule { }
