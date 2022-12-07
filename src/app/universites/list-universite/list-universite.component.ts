import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteService } from 'src/app/core/service/universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss'],
})
export class ListUniversiteComponent implements OnInit {
  listUniversites: Universite[];

  constructor(private serviceUniversite: UniversiteService) {}

  ngOnInit(): void {
    this.getUniversites();
  }

  getUniversites() {
    this.serviceUniversite
      .getAllUniversites()
      .subscribe((data: Universite[]) => {
        this.listUniversites = data;
        console.log(this.listUniversites);
      });
  }
}
