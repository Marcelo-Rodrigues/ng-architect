import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    //BrowserAnimationsModule
  ],
  declarations: [ListaComponent],
  exports: [ListaComponent]
})
export class ListaModule { }
