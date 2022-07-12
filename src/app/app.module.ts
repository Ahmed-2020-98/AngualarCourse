import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { BorderBoxDirective } from './Directives/border-box.directive';
import { UsdPipe } from './pipe/usd.pipe';
import { ReduceQDirective } from './Directives/reduce-q.directive';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { FormatCreaditCardPipe } from './pipe/format-creadit-card.pipe';
import { IdCardPipe } from './pipe/id-card.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    BorderBoxDirective,
    UsdPipe,
    ReduceQDirective,
    OrderMasterComponent,
    FormatCreaditCardPipe,
    IdCardPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
