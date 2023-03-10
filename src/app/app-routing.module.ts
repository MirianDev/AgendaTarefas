import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { ConcluidaComponent } from './quadro/concluida/concluida.component';
import { NaoConcluidaComponent } from './quadro/naoConcluida/naoConcluida.component';
import { QuadroComponent } from './quadro/quadro.component';

const routes: Routes = [ { 
  path: '', component: QuadroComponent },
  {path: 'Login', component: LoginComponent },
  {path: 'cadastrar', component: CadastrarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
