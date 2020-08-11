import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';

const AppRoutes: Routes = [
  { path: "", component: MainComponent },
  { path: "broken", loadChildren: "./broken/broken.module#BrokenModule" },
  { path: "workaround", loadChildren: "./workaround/workaround.module#WorkaroundModule" },
]

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
      enableTracing: true
    })
  ],
  declarations: [ AppComponent, MainComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
