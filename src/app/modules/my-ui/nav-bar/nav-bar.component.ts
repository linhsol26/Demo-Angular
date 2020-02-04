import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  @Output()
  search: EventEmitter<string> = new EventEmitter();
  click: EventEmitter<Event> = new EventEmitter();
  onSearch(event) {
    this.search.emit(event);
  }

  showText(event) {
    this.click.emit(event);
  }
  ngOnInit() {
  }
}
