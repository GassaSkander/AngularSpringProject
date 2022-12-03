import { Component, OnInit } from '@angular/core';
import { Equipes } from 'src/app/core/model/Equipes';
import { EquipesService } from 'src/app/core/service/equipes.service';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-form-equipes',
  templateUrl: './form-equipes.component.html',
  styleUrls: ['./form-equipes.component.scss']
})
export class FormEquipesComponent implements OnInit {

 
  public Equipe:Equipes;
  public action:String;

  constructor(private EquipeService:EquipesService,private route:Router,private currentroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id =this.currentroute.snapshot.params['idEquipe'];
    if(id!=null){
      this.EquipeService.getEquipebyid(id).subscribe(
       
        (data:Equipes)=>{this.Equipe=data}
      );
      //update
      this.action='update';
    }else{
      //add
      this.Equipe=new Equipes()
      this.action='ADD';
    }

  }
  saveEquipe(){
    if(this.action=='update'){
      this.EquipeService.updateEquipe(this.Equipe).subscribe(
        ()=>this.route.navigate(['/equipes']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      )

    }else{
    this.EquipeService.addEquipe(this.Equipe).subscribe(
      ()=>this.route.navigate(['/equipes']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}
    )
    }
  }
}
