import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() lista: Array<any>;
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

  moverParaCima(item) {
    this.moverItem(item, -1);
  }

  moverParaBaixo(item) {
    this.moverItem(item, +1);
  }

  moverItem(value, positionChange) {
    const oldIndex = this.lista.indexOf(value);
    if (oldIndex > -1) {
      let newIndex = (oldIndex + positionChange);
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= this.lista.length) {
        newIndex = this.lista.length;
      }
      this.lista.splice(oldIndex, 1);
      this.lista.splice(newIndex, 0, value);
    }
  }

  remover(item: any) {
    const index: number = this.lista.indexOf(item);
    if (index !== -1) {
      this.lista.splice(index, 1);
    }
  }

}
