import { Component } from '@angular/core';

@Component({
  template: `
  <h2>Workaround Module</h2>
  <div>
    <a [routerLink]="[{ outlets: { primary: ['users', '1'] } }]">Users</a>
    |
    <a [routerLink]="[{ outlets: { secondary: ['groups', '1'] } }]">Groups</a>
    |
    <a [routerLink]="[{ outlets: { tertiary: ['permissions', '1'] } }]">Permissions</a>
  </div>

  <router-outlet><router-outlet>
  <router-outlet name="secondary"><router-outlet>
  <router-outlet name="tertiary"><router-outlet>`
})
export class EntrypointComponent  {
}
