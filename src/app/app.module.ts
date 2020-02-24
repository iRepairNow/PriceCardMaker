import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material-module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from "@angular/common/http";


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PrevcardsComponent} from './pages/prevcards/prevcards.component';
import {EditorComponent} from './pages/editor/editor.component';
import {PricecardsService} from "./services/pricecards.service";
import { PrintPageComponent } from './pages/printpage/print-page.component';
import { TemplateComponent } from './pages/template/template.component';
import {TemplateService} from './services/template.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    PrevcardsComponent,
    EditorComponent,
    PrintPageComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PricecardsService, HttpClientModule, HttpClient, TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
