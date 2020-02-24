import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrevcardsComponent} from './pages/prevcards/prevcards.component';
import { EditorComponent} from './pages/editor/editor.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {PrintPageComponent} from "./pages/printpage/print-page.component";
import {TemplateComponent} from './pages/template/template.component';


const routes: Routes = [
  { path: 'prevcards', component: PrevcardsComponent },
  { path: 'editor', component: EditorComponent },
  { path: '', component: HomepageComponent },
  { path: 'print', component: PrintPageComponent},
  { path: 'template', component:TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
