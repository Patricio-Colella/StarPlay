import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class TraerPlanetaService {

  constructor(private Http:HttpClient) {}

  getPlaneta(url:string){
    return this.Http.get(url)
  }
}