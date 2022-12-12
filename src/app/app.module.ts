import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleTsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent,ProductosComponent,CarritoComponent]
})
export class AppModule { }
