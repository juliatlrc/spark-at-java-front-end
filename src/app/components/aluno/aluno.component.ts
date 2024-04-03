import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EscolaServiceService } from '../escolaService.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  imports: [CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlunoComponent {

  studentForm: FormGroup;

  constructor(private escolaService: EscolaServiceService) {
    this.studentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      grade: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required)
    });
  }


  onSubmit() {
    if (this.studentForm.valid) {
      this.adicionarAluno(this.studentForm.value);
      console.log(this.studentForm.value);
      // E, se necessário, enviar os dados para o servidor
    } else {
      // Se o formulário não for válido, faça alguma coisa, como exibir mensagens de erro
    }
  }

  private adicionarAluno(novoAluno: any) {
    const grade = this.studentForm.get('grade')?.value;
    if(grade) {
      this.escolaService.addStudents(grade, novoAluno)
      .subscribe(
        (data) => {
          console.log('Aluno adicionado com sucesso:', data);
          // Realize qualquer outra ação necessária após a adição do aluno
        },
        (error) => {
          console.error('Erro ao adicionar aluno:', error);
          // Lidar com o erro adequadamente
        }
        );
      }
  }

}
