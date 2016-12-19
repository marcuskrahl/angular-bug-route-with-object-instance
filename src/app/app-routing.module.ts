import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomeObject } from "./some-object.model";

const routes: any = [
  {
    path: '',
    otherProperty: new SomeObject(),
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
