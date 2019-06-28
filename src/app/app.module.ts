import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ServiceComponent } from './service/service.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReverseStr } from './reverse-str.pipe';
import { ViewComponent } from './view/view.component';
import { ServicessubComponent } from './servicessub/servicessub.component';
import { ServicescontentComponent } from './servicescontent/servicescontent.component';
import { CustomformComponent } from './customform/customform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowhideDirective } from './showhide.directive';
import { CustomdirectivesComponent } from './customdirectives/customdirectives.component';
import { Lazyload1Component } from './lazyload1/lazyload1.component';
import { Lazyload2Component } from './lazyload2/lazyload2.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    ServiceComponent,
    PipeComponent,
    ReverseStr,
    ViewComponent,
    ServicessubComponent,
    ServicescontentComponent,
    CustomformComponent,
    ShowhideDirective,
    CustomdirectivesComponent,
    Lazyload1Component,
    Lazyload2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
