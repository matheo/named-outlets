import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrypointComponent } from './entrypoint.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "display"
  },
  {
    path: "display",
    component: EntrypointComponent,
    children: [
      {
        outlet: "users",
        path: ":id",
        loadChildren: () => import('../entity/entity.module').then(m => m.EntityModule),
      },
      {
        outlet: "groups",
        path: ":id",
        loadChildren: () => import('../entity/entity.module').then(m => m.EntityModule),
      },
      {
        outlet: "permissions",
        path: ":id",
        loadChildren: () => import('../entity/entity.module').then(m => m.EntityModule),
      },
    ]
  }
]

@NgModule({
  imports:      [ RouterModule.forChild(routes) ],
  declarations: [ EntrypointComponent ]
})
export class BrokenModule { }