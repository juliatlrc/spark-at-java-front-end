import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EscolaServiceService } from '../escolaService.service';

export interface dadosAlunos {
  name: string;
  id: number;
  grade: string;
  age: number;
}

@Component({
  selector: 'app-consulta-aluno',
  standalone: true,
  imports: [
    MatIconModule,CommonModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule
  ],
  templateUrl: './consulta-aluno.component.html',
  styleUrls: ['./consulta-aluno.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaAlunoComponent {
  consultaAlunos: FormGroup;



  constructor(private escolaService: EscolaServiceService) {
    this.consultaAlunos = new FormGroup({
      id: new FormControl(),
      name: new FormControl(''),
      grade: new FormControl(''),
      age: new FormControl('')
    })


  
  }

  buscarAluno() {
    const idControl = this.consultaAlunos.get('id');
    console.log(this.consultaAlunos.value)
    if (idControl) {
      const id = idControl.value;
      this.escolaService.getStudentById(id)
        .subscribe(
          (data) => {
            console.log('Aluno encontrado:', data);
            this.consultaAlunos.patchValue(data);
          },
          (error) => {
            console.error('Erro ao buscar aluno:', error);
          }
        );
    }
  }

  atualizarAluno() {

    const idControl = this.consultaAlunos.get('id');
    const id = idControl?.value;

    const form = this.consultaAlunos.value

    if (idControl) {
    this.escolaService.updateStudent(id, form)
      .subscribe(
        (data) => {
          this.consultaAlunos.patchValue(data);
        },
        (error) => {
          console.error('Erro ao atualizar aluno:', error);
        }
      );
  }
}
 }
