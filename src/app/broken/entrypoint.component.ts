import { Component } from '@angular/core';

@Component({
  template: `
  <h2>Broken Module</h2>
  <div>
    <a [routerLink]="[{ outlets: { primary: ['users', 'u'] } }]">Users</a>
    |
    <a [routerLink]="[{ outlets: { secondary: ['groups', 'ug'] } }]">Groups</a>
    |
    <a [routerLink]="[{ outlets: { tertiary: ['permissions', 'up'] } }]">Permissions</a>
  </div>

  <router-outlet name="users"><router-outlet>
  <router-outlet name="groups"><router-outlet>
  <router-outlet name="permissions"><router-outlet>`
})
export class EntrypointComponent  {
}
