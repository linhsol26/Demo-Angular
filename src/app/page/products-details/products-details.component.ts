import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public dataService: DataServiceService) { }
  productsDetails = undefined;

  ngOnInit() {
    this.activatedRouter.params.subscribe((params) => {
      this.productsDetails = this.dataService.query(params.id)[0];
    });
  }

  getId(id) {
    return this.productsDetails.id;
  }
}
