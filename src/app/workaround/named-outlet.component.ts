import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <ng-container [ngSwitch]="route.outlet">
    <router-outlet *ngSwitchCase="'users'" name="users"></router-outlet>
    <router-outlet *ngSwitchCase="'groups'" name="groups"></router-outlet>
    <router-outlet *ngSwitchCase="'permissions'" name="permissions"></router-outlet>
  </ng-container>`
})
export class NamedOutletComponent  {
  constructor(public route: ActivatedRoute) {}
}
