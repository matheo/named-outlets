import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutletComponent } from './outlet.component';

const routes: Routes = [
  {
    outlet: "users",
    path: "",
    pathMatch: "full",
    component: OutletComponent
  },
  {
    outlet: "groups",
    path: "",
    pathMatch: "full",
    component: OutletComponent
  },
  {
    outlet: "permissions",
    path: "",
    pathMatch: "full",
    component: OutletComponent
  },
]

@NgModule({
  imports:      [ RouterModule.forChild(routes) ],
  declarations: [ OutletComponent ]
})
export class EntityModule { }