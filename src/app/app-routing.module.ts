import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { ConsultaAlunoComponent } from './components/consulta-aluno/consulta-aluno.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { TurmasComponent } from './components/turmas/turmas.component';

const routes: Routes = [
  { path: 'cadastro-alunos', component: AlunoComponent },
  { path: 'consulta-edicao', component: ConsultaAlunoComponent },
  { path: 'professor', component: ProfessorComponent },
  { path: 'turma', component: TurmasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
