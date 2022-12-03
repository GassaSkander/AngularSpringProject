import { Component, OnInit } from '@angular/core';
import { Equipes } from '../core/model/Equipes';
import { EquipesService } from '../core/service/equipes.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss']
})
export class EquipesComponent implements OnInit {
  public listEquipe:Equipes[];
  public title="List Of Equipes";


  constructor(private EquipeService:EquipesService) { }

  ngOnInit(): void {
    this.getEquipes()
  }
  getEquipes():void{
    this.EquipeService.getAllEquipes().subscribe(
      (data:Equipes[])=>{
        console.log(this.listEquipe=data)
      }
      
      
      
      )
  }
  deleteEquipe(p:Equipes){
    let i = this.listEquipe.indexOf(p);
    this.EquipeService.deleteEquipebyId(p.idEquipe).subscribe(
      ()=>this.listEquipe.splice(i, 1)
    )

  }
}
