import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  text = '';
  constructor() { }
  a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  keywords = '';
  onClick(event) {
    this.text = 'Its Work!' + ' ' + this.a[Math.floor(Math.random() * 9)];
  }
  onSearch(event) {
    this.keywords = event;
  }
  ngOnInit() {
  }

}
