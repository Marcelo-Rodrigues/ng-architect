import { Component, OnInit } from '@angular/core';
import { EstruturaAplicacaoService } from '../../shared/estrutura-aplicacao.service';
import { NgForm, NgModel } from '@angular/forms';
import { DominioLogico } from './dominio-logico';

@Component({
  selector: 'my-assist-dominio-logico',
  templateUrl: './assist-dominio-logico.component.html',
  styleUrls: ['./assist-dominio-logico.component.css']
})
export class AssistDominioLogicoComponent implements OnInit {

  model: DominioLogico;

  constructor(private estruturaAplicacaoService: EstruturaAplicacaoService) {
    this.novoDominio();
  }

  ngOnInit() {
  }

  adicionar() {
    this.estruturaAplicacaoService.dominiosLogicos.push(this.model);
    this.novoDominio();
  }

  novoDominio() {
    this.model = new DominioLogico('', '');
  }

  remover(item: DominioLogico) {

    const index: number = this.estruturaAplicacaoService.dominiosLogicos.indexOf(item);
    if (index !== -1) {
      this.estruturaAplicacaoService.dominiosLogicos.splice(index, 1);
    }
  }

  moverParaCima(item) {
    this.moverItem(this.estruturaAplicacaoService.dominiosLogicos, item, -1);
  }

  moverParaBaixo(item) {
    this.moverItem(this.estruturaAplicacaoService.dominiosLogicos, item, +1);
  }

  moverItem(array: Array<any>, value, positionChange) {
    const oldIndex = array.indexOf(value);
    if (oldIndex > -1) {
      let newIndex = (oldIndex + positionChange);
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= array.length) {
        newIndex = array.length;
      }
      array.splice(oldIndex, 1);
      array.splice(newIndex, 0, value);
    }
  }
}
