import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaComponent],
  exports: [ListaComponent]
})
export class ListaModule { }
