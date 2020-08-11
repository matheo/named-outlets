import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrypointComponent } from './entrypoint.component';
import { NamedOutletComponent } from './named-outlet.component';

const routes: Routes = [
  {
    path: "",
    component: EntrypointComponent,
    children: [
      {
        outlet: "users",
        path: ":id",
        component: NamedOutletComponent,
        loadChildren: () => import('../entity/entity.module').then(m => m.EntityModule),
      },
      {
        outlet: "groups",
        path: ":id",
        component: NamedOutletComponent,
        loadChildren: () => import('../entity/entity.module').then(m => m.EntityModule),
      },
      {
        outlet: "permissions",
        path: ":id",
        component: NamedOutletComponent,
        loadChildren: () => import('../entity/entity.module').then(m => m.EntityModule),
      },
    ]
  }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ EntrypointComponent, NamedOutletComponent ]
})
export class WorkaroundModule { }