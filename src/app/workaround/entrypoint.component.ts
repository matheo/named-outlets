import { Component } from '@angular/core';

@Component({
  template: `
  <h2>Workaround Module</h2>
  <div>
    <a [routerLink]="[{ outlets: { users: ['u'] } }]">Users</a>
    |
    <a [routerLink]="[{ outlets: { groups: ['ug'] } }]">Groups</a>
    |
    <a [routerLink]="[{ outlets: { permissions: ['up'] } }]">Permissions</a>
  </div>

  <router-outlet name="users"><router-outlet>
  <router-outlet name="groups"><router-outlet>
  <router-outlet name="permissions"><router-outlet>`
})
export class EntrypointComponent  {
}
