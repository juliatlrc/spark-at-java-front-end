import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';



const ELEMENT_DATA: any = [
  { id: '1', name: '3 A', teacher: 'Elberth Moraes', studentes: [
    'Larissa', 'João'
  ]},
  { id: '1', name: '1 A', teacher: 'Elberth Moraes', studentes: [
    'Amelia ', 'Natalia', ' Sara'
  ]},
  { id: '2', name: '1 F', teacher: 'Elberth Moraes', studentes: [
    'Larissa', ' Amely'
  ]},
  { id: '3', name: '4 A', teacher: 'Elberth Moraes', studentes: [
    'Larissa', ' Jordana '
  ]},
  { id: '4', name: '5 C', teacher: 'Elberth Moraes', studentes: [
    'Larissa', ' Luara Menezes'
  ]},
  { id: '5', name: '7 A', teacher: 'Elberth Moraes', studentes: [
    'Larissa', ' Paula Fernanda' , ' Mauritânia'
  ]},
  { id: '6', name: '9 B', teacher: 'Elberth Moraes', studentes: [
    'Larissa', ' João'
  ]},
]

@Component({
  selector: 'app-turmas',
  standalone: true,
  imports: [
    MatTableModule,CommonModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule
  ],
  templateUrl: './turmas.component.html',
styleUrls: ['./turmas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TurmasComponent { 

  displayedColumns: string[] = ['id', 'name', 'teacher', 'studentes'];
  dataSource = ELEMENT_DATA;
}
