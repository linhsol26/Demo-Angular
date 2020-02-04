import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-button-result',
  templateUrl: './click-button-result.component.html',
  styleUrls: ['./click-button-result.component.scss']
})
export class ClickButtonResultComponent implements OnInit {

  constructor() { }
  @Input()
  text = '';
  ngOnInit() {
  }

}
