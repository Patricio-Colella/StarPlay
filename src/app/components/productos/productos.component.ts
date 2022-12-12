import { Component, OnInit,  } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TraerJuguetesService } from 'src/app/services/traer-juguetes.service';
import { TraerPlanetaService } from 'src/app/services/traer-planeta.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  juguetes:Array<any>=[]
  constructor(private juguetesService:TraerJuguetesService,private planetasService:TraerPlanetaService) { }

  getJuguetes(){
    return this.juguetesService.getJuguetes() 
  }

  getPlaneta(url:string){
      return this.planetasService.getPlaneta(url)
  }

  ngOnInit(): void {
    this.getJuguetes().subscribe((res:any)=>{
      let resJuguetes=res.results.slice(0,6)

      resJuguetes.forEach(async (juguete:any,i:number)=>{
        forkJoin(
          juguete.films.map((film:string)=>
            this.getPlaneta(film)
          )
        ).subscribe((responses:any) => {
          let cantEnCarrito = localStorage.getItem(i.toString())

          this.juguetes.push({
            ...juguete,
            ...productos[i],
            peliculas:responses.map((pelicula:any)=>pelicula.title ),
            cantEnCarrito
          })
        });        
      })
    })
  }

  aniadirCarrito=function(id:string,precio:number){
    localStorage.setItem(id,"1 "+precio.toString())  
  }
}


let productos=[
  {
      categoria:"Juguete de accion",
      precio:7050,
      img:"../../../assets/imgs/luck sky.jpg",
      tamanio:"40cm"
  },
  {
      categoria:"Juguete de accion",
      precio:8550,
      img:"../../../assets/imgs/c3pr.jpg",
      tamanio:"50cm"
  },
  {
      categoria:"Juguete de accion",
      precio:9000,
      img:"../../../assets/imgs/r2-d2.jpg",
      tamanio:"60cm"
  },
  {
      categoria:"Poster",
      precio:3000,
      img:"../../../assets/imgs/darth vader.jpg",
      tamanio:"70cmx50cm"
  },
  {
      categoria:"Poster",
      precio:4000,
      img:"../../../assets/imgs/leia.jpg",
      tamanio:"70cmx50cm"
  },
  {
      categoria:"Poster",
      precio:3500,
      img:"../../../assets/imgs/owen lars.webp",
      tamanio:"70cmx50cm"
  }
]
