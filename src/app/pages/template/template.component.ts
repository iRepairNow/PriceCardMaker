import { Component, OnInit } from '@angular/core';
import {PriceCard} from '../../classes/pricecard/pricecard';
import {TemplateService} from '../../services/template.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(private templateService: TemplateService, private router: Router,private snackBar: MatSnackBar) { }

  priceCards: PriceCard[];

  ngOnInit() {
    this.templateService.getTemplates().subscribe((data) =>{
      this.priceCards = data;
    })
  }

  goToEditor(id){
    this.templateService.getTemplate(id).subscribe((data) =>{
      this.router.navigateByUrl('/editor', {state: data});
    })
  }

  deleteTemp(id){
    this.templateService.deleteTemplate(id).subscribe((data)=>{
      this.snackBar.open(data.message, '', {duration:3000});
      this.templateService.getTemplates().subscribe((data) =>{
        this.priceCards = data;
      })
    });
  }



}
