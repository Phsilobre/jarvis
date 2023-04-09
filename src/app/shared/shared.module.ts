import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ChoreCategoryPipe } from './pipes/chore-category.pipe';



@NgModule({
  declarations: [
    ContextMenuComponent,
    ChoreCategoryPipe
  ],
  imports: [
    CommonModule,
    DatePipe
  ],
  exports: [
    ContextMenuComponent,
    ChoreCategoryPipe,
    DatePipe
  ]
})
export class SharedModule { }
