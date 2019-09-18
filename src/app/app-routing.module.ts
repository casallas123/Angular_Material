import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentServiceComponent } from './component-service/component-service.component';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'component-service', component: ComponentServiceComponent},
  {path: 'general', component: GeneralComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
