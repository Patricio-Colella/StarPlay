import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router"
import { AppComponent } from '../app.component';
import { CarritoComponent } from '../components/carrito/carrito.component';
import { ProductosComponent } from '../components/productos/productos.component';

const routes:Routes=[
  {path:"",component:AppComponent,children:[
    {path:"",component:ProductosComponent},
    {path:"carrito",component:CarritoComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModuleTsModule { }
