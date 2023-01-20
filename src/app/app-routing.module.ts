import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcluidaComponent } from './quadro/concluida/concluida.component';
import { NaoConcluidaComponent } from './quadro/naoConcluida/naoConcluida.component';
import { QuadroComponent } from './quadro/quadro.component';

const routes: Routes = [ { 
  path: '', component: QuadroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
