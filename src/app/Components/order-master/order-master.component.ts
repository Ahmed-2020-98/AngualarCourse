import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {
  catList:ICategory[];
  selectedCatID:number=0;
  constructor() { 

   
    this.catList=[
      {id:1,name:'labTop'},
      {id:2,name:'TV'},
      {id:3,name:'Mobile'},
    ];

  }

  ngOnInit(): void {
  }

}
