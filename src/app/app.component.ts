import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Empty Outlet</h1>
    <p>
      <a routerLink="/broken">Broken</a>
      |
      <a routerLink="/workaround">Workaround</a>
    </p>

    <router-outlet></router-outlet>
  `
})
export class AppComponent  {
}
