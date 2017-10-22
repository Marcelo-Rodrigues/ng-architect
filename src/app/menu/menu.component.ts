import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { RotaMenu, routes } from '../app-routing.module';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  rotaAtiva = '';
  subscription: Subscription;
  menus: RotaMenu[];

  constructor(public router: Router) {
    this.menus = routes
    .filter(item => item.menuId);
  }

  ngOnInit() {
    this.subscription = this.router.events
      //  .filter(event => event instanceof ActivatedRoute)
      .subscribe(() => this.rotaAtiva = this.router.url);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
