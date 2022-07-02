import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product:IProduct={catID:12,id:40,imgURL:'https://fakeimg.pl/250x100/',name:'pepsi',price:10,quantity:1};
  prdlist:IProduct[];
  // catList:ICategory[];
  selectedCatID:number=0;
  myDate:Date=new Date();

  storeData:Store;


  constructor() {
    //initialize array with anomynous objects
    this.prdlist=[
      {id:1,name:'Dell',price:12000,quantity:0,imgURL:'assets/lenovo.jpg',catID:1},
      {id:12,name:'Lenovo',price:5000,quantity:3,imgURL:'assets/iphone.jpg',catID:1},
      {id:6,name:'LG',price:12000,quantity:2,imgURL:'assets/lg.jpg',catID:2},
      {id:54,name:'Tornado',price:7000,quantity:1,imgURL:'assets/samsongTv.jpg',catID:2},
      {id:87,name:'xiaomi',price:6200,quantity:0,imgURL:'assets/xiaomi.jpg',catID:3},
      {id:15,name:'samsung',price:5200,quantity:6,imgURL:'assets/samsong1.jpg',catID:3},

    ];

    this.storeData=new Store("market",["liverpool","mahala elkobra","ahu hammad"],"https://fakeimg.pl/250x100/");

    // this.catList=[
    //   {id:1,name:'labTop'},
    //   {id:2,name:'TV'},
    //   {id:3,name:'Mobile'},
    // ];

   }
 
   showImg:boolean=true;
   userFeedback:string="Good"; 
   toggleImg(){
    this.showImg=!this.showImg;
   }
   
trackByItems(index: number, item: IProduct): number { return item.id; }

  ngOnInit(): void {
  }

redu:number=2;
  reduce():number{
    return this.redu-1;
  }

}
