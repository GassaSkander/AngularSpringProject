import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteService } from 'src/app/core/service/universite.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.scss'],
})
export class AddUniversiteComponent implements OnInit {
  listUniversites: Universite[];
  addUniversityForm = new FormGroup({
    nomUni: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10),]),
  });
  constructor(private serviceUniversite: UniversiteService) {}

  ngOnInit(): void {}

  addUniversity() {
    console.log(this.addUniversityForm.value);
    this.serviceUniversite.addUniversite(this.addUniversityForm.value).subscribe();
    this.addUniversityForm.reset();
    this.serviceUniversite
      .getAllUniversites()
      .subscribe((data: Universite[]) => {
        this.listUniversites = data;
        console.log(this.listUniversites);
      });
  }
  resetForm() {
    this.addUniversityForm.reset();
  }
}
