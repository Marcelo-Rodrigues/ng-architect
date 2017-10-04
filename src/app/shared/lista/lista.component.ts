import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'my-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  animations: [
    trigger('moveState', [
      state('moveUp', style({
        transform: 'translateY(-42px)',
        zIndex: 2
      })),
      state('moveDown', style({
        transform: 'translateY(42px)',
        zIndex: 2
      })),
      state('static', style({
        transform: 'translateY(0)'
      })),
      state('destroy', style({
        transform: 'scale(0.01)'
      })),
      transition('* => moveUp', animate('200ms ease-in')),
      transition('* => moveDown', animate('200ms ease-out')),
      transition('* => destroy', animate('200ms ease-out')),
      transition('* => static', animate('0ms linear'))
    ])
  ]
})
export class ListaComponent implements OnInit {

  @Input() lista: Array<any>;
  @Input() item: any;
  @Output() change = new EventEmitter();
  state = 'static';

  constructor() { }

  ngOnInit() {
  }

  moverParaCima(item) {
    this.state = 'moveUp';
    this.moverItem(item, -1);
  }

  moverParaBaixo(item) {
    this.state = 'moveDown';
    this.moverItem(item, +1);
  }

  moverItem(value, positionChange) {
    setTimeout(() => {

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
      this.state = 'static';
      this.change.emit();

    }, 200);
  }

  remover(item: any) {
    this.state = 'destroy';
    setTimeout(() => {

      const index: number = this.lista.indexOf(item);
      if (index !== -1) {
        this.lista.splice(index, 1);
      }
    }, 200);
  }

}
