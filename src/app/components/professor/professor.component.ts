import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


const ELEMENT_DATA: any = [
 {name: 'Rosalina', subject: 'POO', age: 23, id: '20'}
]

@Component({
  selector: 'app-professor',
  standalone: true,
  imports: [
   MatTableModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule
  ],
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessorComponent { 

  displayedColumns: string[] = ['name', 'subject', 'age', 'id'];
  dataSource = ELEMENT_DATA;
}
