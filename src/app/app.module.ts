import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EscolaServiceService } from './components/escolaService.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunoComponent,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [EscolaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
