import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TraerJuguetesService {

  urlPersonas = "https://swapi.dev/api/people"

  constructor(private Http:HttpClient) {}

  getJuguetes(){
    return this.Http.get(this.urlPersonas)
  }
}
