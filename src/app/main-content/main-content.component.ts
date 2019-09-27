import { Component, OnInit } from '@angular/core';
interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  students: Array<IStudent> = [];
  constructor() { 
  this.students[0] = {
    id: 1,
    firstName: 'Brandon',
    lastName: 'Peterson',
    course: 'Programming'
  }
  this.students[1] = {
    id: 2,
    firstName: 'Bill',
    lastName: 'Gates',
    course: 'Math'
  }
  this.students[2] = {
    id: 3,
    firstName: 'Jeff',
    lastName: 'Jef',
    course: 'English'
  }
  this.students[3] = {
    // id: 4,
    firstName: 'Frank',
    lastName: 'Reynolds',
    course: 'PE'
  };
}
  ngOnInit() {
  }
addStudent() {
  const student: IStudent = {
        id: 5,
        firstName: 'Dennis',
        lastName: 'Reynolds',
        course: 'Science'
  };
  this.students.push(student);
}
}
