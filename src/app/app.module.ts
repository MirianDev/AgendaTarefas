import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcluidaComponent } from './quadro/concluida/concluida.component';
import { NaoConcluidaComponent } from './quadro/naoConcluida/naoConcluida.component';
import { QuadroComponent } from './quadro/quadro.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [		
    AppComponent,
    NaoConcluidaComponent,
    ConcluidaComponent,
    QuadroComponent,
      LoginComponent,
      CadastrarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
