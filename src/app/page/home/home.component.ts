import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  text = '';
  constructor(public dataService: DataServiceService, public router: Router) { }
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

  getDetails(id) {
    this.router.navigate(['/product/' + id]);
  }
}
