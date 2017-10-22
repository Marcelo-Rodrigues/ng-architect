import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  // Componente criado para suporte do menu a internacionalização
  @Input() menuId: string;

  constructor() { }

  ngOnInit() {
  }

}
