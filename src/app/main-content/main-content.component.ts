import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Bill',
        lastName: 'Gates',
        course: 'Math',
        editMode: false
      },
      {
        id: 2,
        firstName: 'Dennis',
        lastName: 'Reynolds',
        course: 'Science',
        editMode: false
      },
      {
        id: 3,
        firstName: 'Frank',
        lastName: 'Roosevelt',
        course: 'P.E.',
        editMode: false
      }
    ];
  }
  addStudent() {
    this.studentArray.unshift({
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    });
    this.disableAddButton = true;
  }
  removeStudent(index: number) {
    this.studentArray.splice(index, 1);
  }
  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;
    this.sort('asc');
  }
  sort(direction: string) {
    this.studentArray.sort((a: IStudent, b: IStudent) => {
    //   if (a.id < b.id) {
    //     if (direction === 'asc') {
    //       return -1;
    //     } else {
    //       return 1;
    //     }
    //   } else {
    //     if (direction === 'asc') {
    //       return 1;
    //   } else {
    //       return -1;
    //   }
    // }
      // ^ same as: return a.id < b.id ? -1 : 1; ---the ? is a ternary mark.
      // a.id < b.id is an if statement. If its true, return -1. else return 1
      return a.id < b.id ? -1 : 1;
    });
  }
}
