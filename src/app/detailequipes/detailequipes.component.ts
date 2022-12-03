import { Component, OnInit } from '@angular/core';
import { detailEquipes } from '../core/model/detailEquipes';
import { DetailequipesService } from '../core/service/detailequipes.service';

@Component({
  selector: 'app-detailequipes',
  templateUrl: './detailequipes.component.html',
  styleUrls: ['./detailequipes.component.scss']
})
export class DetailequipesComponent implements OnInit {

  public listEquipe:detailEquipes[];
  public title="List Of Details Equipes";

  editdata:any;
  constructor(private EquipeService:DetailequipesService) {

   
   }

  ngOnInit(): void {
    this.getEquipes()
    
  }
  getEquipes():void{
    this.EquipeService.getAlldetailEquipes().subscribe(
      (data:detailEquipes[])=>{
        console.log(this.listEquipe=data)
      }
      
      )
  }
  deleteEquipe(p:detailEquipes){
    let i = this.listEquipe.indexOf(p);
    this.EquipeService.deletedetailEquipebyId (p.idEquipe).subscribe(
      ()=>this.listEquipe.splice(i, 1)
    )

  }
  edit(code: any) {
    
    

    }
    

  }



