import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {FuncionarioCrudComponent} from "./views/funcionario-crud/funcionario-crud.component";
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';



const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/home' },
  {path: "home", component: HomeComponent},
  {path:"funcionarios", component: FuncionarioCrudComponent },
  {path:"funcionarios/create", component: FuncionarioCreateComponent},
  {path:"funcionarios/update/:id", component: FuncionarioUpdateComponent},
  {path:"funcionarios/delete/:id", component: FuncionarioDeleteComponent}

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
