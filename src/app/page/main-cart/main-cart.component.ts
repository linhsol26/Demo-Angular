import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.scss']
})
export class MainCartComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, public dataService: DataServiceService) { }
  count = 1;
  tempProd = undefined;
  prod = [];
  ngOnInit() {
  }
}
