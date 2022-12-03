import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { detailEquipes } from '../model/detailEquipes';
@Injectable({
  providedIn: 'root'
})
export class DetailequipesService {

  public uri= environment.uri

  constructor(private http:HttpClient) { }
  getAlldetailEquipes(){
      return this.http.get<detailEquipes[]>(this.uri+'getDetEquipe')
  }
  deletedetailEquipebyId(id:number){
      return this.http.delete(this.uri+'delDetEquipe/'+id);
  }
  adddetailEquipe(e:detailEquipes){
    return this.http.post(this.uri+'addDetEquipe',e)
  }
  getdetailEquipebyid(id:number){
    return this.http.get<detailEquipes>(this.uri+'getDetbyid/'+id)

  }
  updatedetailEquipe(e:detailEquipes){
    return this.http.put(this.uri+'putDetEquipe/'+e.idEquipe,e)
  }
}
