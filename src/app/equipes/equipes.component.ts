import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  changeText: boolean;


  constructor(private EquipeService:EquipesService,private route:Router) {

    this.changeText = false;
   }

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
  setOpen(){
    

  }
}
