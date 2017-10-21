import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input() quantidade: number;
  @Input() zero: string;
  @Input() um: string;
  @Input() plural: string;

  constructor() { }

  ngOnInit() {
  }

  descricaoQuantidade() {
    switch (this.quantidade) {
      case 0:
        return this.zero;
      case 1:
        return this.um;
      default:
        return `${this.quantidade} ${this.plural}`;
    }
  }
}
