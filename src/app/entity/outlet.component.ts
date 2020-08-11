import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<p>Outlet: {{ route.outlet }} {{ route.snapshot.params | json }}</p>`
})
export class OutletComponent {
  constructor(public route: ActivatedRoute) {}
}
