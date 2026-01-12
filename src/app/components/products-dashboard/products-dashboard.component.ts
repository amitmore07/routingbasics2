import { Component, OnInit } from '@angular/core';
import { productsData } from 'src/app/shared/consts/products';
import { Ipost } from 'src/app/shared/models/products';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {


  productsArr: Array<Ipost> = productsData;
  ImgUrl = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
  
  constructor() { }

  ngOnInit(): void {
  }

}
