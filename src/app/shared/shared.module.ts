import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ChoreCategoryPipe } from './pipes/chore-category.pipe';



@NgModule({
  declarations: [
    ContextMenuComponent,
    ChoreCategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContextMenuComponent,
    ChoreCategoryPipe
  ]
})
export class SharedModule { }
