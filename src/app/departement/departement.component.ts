import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from '../core/model/departement';
import { DepartementService } from '../core/service/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {

  public listdepartement:Departement[];
  public title="List Of Departments";
  changeText: boolean;


  constructor(private departementervice:DepartementService,private route:Router) {

    this.changeText = false;
   }

  ngOnInit(): void {
    this.getdepartement()
    
  }

  getdepartement():void{
    this.departementervice.getAllDep().subscribe(
      (data:Departement[])=>{
        console.log(this.listdepartement=data)
      }
      
      )
  }
  deletedepartement(p:Departement){
    let i = this.listdepartement.indexOf(p);
    this.departementervice.deletedepbyID(p.idDepart).subscribe(
      ()=>this.listdepartement.splice(i, 1)
    )

  }

}
