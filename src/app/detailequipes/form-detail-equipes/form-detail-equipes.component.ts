import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { detailEquipes } from 'src/app/core/model/detailEquipes';
import { DetailequipesService } from 'src/app/core/service/detailequipes.service';

@Component({
  selector: 'app-form-detail-equipes',
  templateUrl: './form-detail-equipes.component.html',
  styleUrls: ['./form-detail-equipes.component.scss']
})
export class FormDetailEquipesComponent implements OnInit {

  public FormDet:FormGroup

  public Rec:detailEquipes;
  public action:String;

  constructor(private recService:DetailequipesService,private route:Router,private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.FormDet = new FormGroup(
      {
        
        salle: new FormControl('',[Validators.required ]),

        thematique: new FormControl('', [Validators.required])
      }
    )
    let id =this.currentRoute.snapshot.params['idRec'];
    if(id!=null){
      this.recService.getdetailEquipebyid(id).subscribe(
       
        (data:detailEquipes)=>{this.Rec=data}
      );
      //update
      this.action='update';
    }else{
      //add
      this.Rec= new detailEquipes()

      console.log(this.Rec);
      this.action='ADD';
    }
  }
  addRec(){
    if(this.action=='update'){
      this.recService.updatedetailEquipe(this.Rec).subscribe(
        ()=>this.route.navigate(['/detailequipes']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      )

    }else{
    this.recService.adddetailEquipe(this.FormDet.value).subscribe(
      ()=>this.route.navigate(['/detailequipes']),
      ()=>{console.log('error')},
      ()=>{console.log(this.FormDet.value.desc),

        console.log(this.FormDet.value),
      ()=>{console.log('complete')}}

    )
    }
  }

}
