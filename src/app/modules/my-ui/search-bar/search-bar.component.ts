import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }
  @Input()
  keywords: '';

  @Output()
  search: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  onEnter(event) {
    if (event.key === 'Enter') {
      this.search.emit(this.keywords);
    }
  }
}
