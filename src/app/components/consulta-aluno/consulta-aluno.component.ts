import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-consulta-aluno',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule
  ],
  templateUrl: './consulta-aluno.component.html',
  styleUrls: ['./consulta-aluno.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaAlunoComponent {
  consultaAlunos: FormGroup;

  constructor() {
    this.consultaAlunos = new FormGroup({
      
    })
  }
 }
