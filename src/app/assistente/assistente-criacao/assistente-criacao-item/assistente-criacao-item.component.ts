import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-assistente-criacao-item',
  templateUrl: './assistente-criacao-item.component.html'
})
export class AssistenteCriacaoItemComponent implements OnInit {

  // Componente criado para suporte do assistente a internacionalização
  @Input() stepId: string;

  constructor() { }

  ngOnInit() {
  }

}
