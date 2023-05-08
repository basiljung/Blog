import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { TabNavComponent } from './structure-components/tab-nav/tab-nav.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './content-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    TabNavComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, TabMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
