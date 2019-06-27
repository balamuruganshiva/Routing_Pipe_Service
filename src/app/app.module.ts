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

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    ServiceComponent,
    PipeComponent,
    ReverseStr,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
