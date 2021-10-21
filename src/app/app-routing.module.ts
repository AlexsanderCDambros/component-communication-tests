import { ComponentDoisComponent } from './pages/component-dois/component-dois.component';
import { ComponentUmComponent } from './pages/component-um/component-um.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: ComponentUmComponent },
  { path: "dois", component: ComponentDoisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
