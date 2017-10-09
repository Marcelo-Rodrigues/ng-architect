import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {

  @Input() configAplicacao = '';
  constructor() { }

  ngOnInit() {
  }

}
