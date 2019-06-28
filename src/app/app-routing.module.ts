import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceComponent} from './service/service.component';
import {PipeComponent} from './pipe/pipe.component';
import {ViewComponent}  from './view/view.component';
import {ServicescontentComponent} from './servicescontent/servicescontent.component';
import {ServicessubComponent} from './servicessub/servicessub.component';
import {CustomformComponent} from './customform/customform.component';
import {CustomdirectivesComponent} from './customdirectives/customdirectives.component'

const routes: Routes = [
  {path:'service', component: ServiceComponent,
   children: [
    {path:'first', component: ServicescontentComponent},
    {path: "second", component: ServicessubComponent }
   ]
  },
  {path:'pipe', component: PipeComponent},
  { path: "view/:id", component: ViewComponent },
  { path: 'formvalidation', component: CustomformComponent},
  {path: 'customdirective', component: CustomdirectivesComponent},
  {path: 'lazyload1', loadChildren: './lazyload1/lazyload1.component'},
  {path: 'lazyload2', loadChildren: './lazyload2/lazyload2.component'} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
