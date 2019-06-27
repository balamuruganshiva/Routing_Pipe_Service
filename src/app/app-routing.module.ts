import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceComponent} from './service/service.component';
import {PipeComponent} from './pipe/pipe.component';
import {ViewComponent}  from './view/view.component';
const routes: Routes = [
  {path:'service', component: ServiceComponent},
  {path:'pipe', component: PipeComponent},
  { path: "view/:id", component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
