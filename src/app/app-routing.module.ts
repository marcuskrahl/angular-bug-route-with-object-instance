import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomeObject } from "./some-object.model";

const routes: Routes = [
  {
    path: '',
    children: [],
    data: {
      otherProperty: new SomeObject()
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
