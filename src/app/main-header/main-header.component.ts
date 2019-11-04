import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  // private firstName: string;
  // private lastName: string;
  // constructor() {
  //   this.firstName = 'Brandon';
  //   this.lastName = 'Peterson';
  // modified to match lab 5
  firstName = 'Brandon';
  lastName = 'Peterson';
  greeting = 'r1c2';

  constructor(
private router: Router
  ) { }


  showGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
    }
    hideGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'r1c2';
  }
  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
