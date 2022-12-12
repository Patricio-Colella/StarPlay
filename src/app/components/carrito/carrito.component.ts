import { Component, OnInit } from '@angular/core';
import { TraerJuguetesService } from 'src/app/services/traer-juguetes.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  lista:Array<any> = []

  moneda:Array<any> = ["ARG",1]
  constructor(private juguetesService:TraerJuguetesService) { }

  total:number = 0
  
  loading:boolean=true

  getJuguetes(){
    return this.juguetesService.getJuguetes()
  }

  ngOnInit(): void {
    this.getJuguetes().subscribe((res:any)=>{
      let resJuguetes=res.results.slice(0,6)

      resJuguetes.forEach((juguete:any,i:number)=>{
        let jugueteCarrito = localStorage.getItem(juguete.name)
        if(jugueteCarrito!==null){
          let [cant, precio] = jugueteCarrito.split(" ")
          this.lista.push({
            nombre:juguete.name,
            categoria:productos[i],
            precio,
            cant
          })
          this.total+=(parseFloat(precio)*parseInt(cant))
        }
      })
      this.loading=false
    })
  }
  
  masCantCarrito(id:string){
    const actual = localStorage.getItem(id)
    if(actual){
      let [cant,precio] = actual.split(" ")
      let newcant = parseInt(cant)+1
      localStorage.setItem(id.toString(),newcant.toString()+" "+precio)
      this.lista.forEach((elem,i)=>{
        if(elem.nombre===id){
          elem.cant=newcant
          this.total+=(parseFloat(precio))
        }
      })
    }
}

  menosCantCarrito(id:string){
    const actual = localStorage.getItem(id)
    if(actual){
      let [cant,precio] = actual.split(" ")
      let newcant = parseInt(cant)-1
      if(newcant===0){
        localStorage.removeItem(id)
        this.lista=this.lista.filter((elem)=>elem.nombre!==id)
      }else{
        localStorage.setItem(id.toString(),newcant.toString()+" "+precio)
        this.lista.forEach((elem,i)=>{
          if(elem.nombre===id){
            elem.cant=newcant
            this.total-=(parseFloat(precio))
          }
        })
      }
    }
  }


  cambiarMoneda(e:any){
    switch(e.value){
      case "ARG":{
        this.moneda=["ARG",1]
        break
      }
      case "USD":{
        this.moneda=["ARG",1.71]
        break
      }
      case "EUR":{
        this.moneda=["ARG",1.8]
        break
      }
    }
  }
}

let productos=["Juguete de accion","Juguete de accion","Juguete de accion","Poster","Poster","Poster"]