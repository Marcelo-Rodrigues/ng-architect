import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input() quantidade: number;

  constructor() { }

  ngOnInit() {
  }
}
