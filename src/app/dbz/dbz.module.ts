import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './pages/main-page.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/form/form.component';


@NgModule({
    declarations: [
      MainPagesComponent,
      ListComponent,
      CharacterComponent],
    exports: [MainPagesComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class DbzModule { }
