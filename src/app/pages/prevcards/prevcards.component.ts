import { Component, OnInit } from '@angular/core';
import {PricecardsService} from '../../services/pricecards.service';
import {PriceCard} from '../../classes/pricecard/pricecard';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-prevcards',
  templateUrl: './prevcards.component.html',
  styleUrls: ['./prevcards.component.scss']
})
export class PrevcardsComponent implements OnInit {

  constructor(private cardService: PricecardsService, private router: Router,private snackBar: MatSnackBar) { }

  priceCards: PriceCard[];
  ShowHiddenFeauture = false;


  ngOnInit() {
    this.cardService.getPriceCards().subscribe((data) =>{
      this.priceCards = data;
    })
  }

  goToEditor(id){
    this.cardService.getPriceCard(id).subscribe((data) =>{
      this.router.navigateByUrl('/editor', {state: data});
    })
  }

  deletePriceCard(id){
    this.cardService.deletePriceCard(id).subscribe((data)=>{
      this.snackBar.open(data.message, '', {duration:3000});
      this.cardService.getPriceCards().subscribe((data) =>{
        this.priceCards = data;
      })
    });

  }

  deleteAll(){
    this.cardService.deleteAllPriceCards().subscribe((data) =>{
      this.priceCards = data;
    })
  }

  toggleSelected(obj, $event){
    if ($event.shiftKey){
      this.ShowHiddenFeauture = !this.ShowHiddenFeauture
    }
  }
}
