import { Component, OnInit } from '@angular/core';
import { EscolaServiceService } from '../escolaService.service';
import { MatTableModule } from '@angular/material/table';

export interface ClassroomEntity {
  id: string;
  name: string;
  students: StudentEntity[];
  teacher: TeacherEntity;
}

export interface StudentEntity {
  id: string;
  name: string;
  age: number;
  grade: string;
}

export interface TeacherEntity {
  id: string;
  name: string;
  age: number;
  subject: string;
}

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css'], 
  imports:[MatTableModule],
  standalone: true
})
export class TurmasComponent implements OnInit {
  classrooms: ClassroomEntity[] = [];
  dataSource: ClassroomEntity[] = [];

  displayedColumns: string[] = ['id', 'name', 'teacher', 'students'];

  constructor(private escolaService: EscolaServiceService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(): void {
    this.escolaService.getAllClassroom()
      .subscribe(classrooms => {
        this.classrooms = classrooms as unknown as ClassroomEntity[];
      });
  }

  getStudentsList(classroom: ClassroomEntity): string {
    return classroom.students.map(student => student ? student.name : '-').join(', ');
  }
}
