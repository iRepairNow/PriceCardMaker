import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';
import {PricecardsService} from '../../services/pricecards.service';
import {Router} from '@angular/router';
import {PriceCard} from '../../classes/pricecard/pricecard';
import {TemplateService} from '../../services/template.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  myForm: Object;
  selectTemplateForm: Object;
  state: PriceCard;
  showSale: Boolean;
  templates: PriceCard;


  constructor(private fb: FormBuilder, private cardService: PricecardsService, private router: Router, private templateService: TemplateService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.state = history.state;
    this.showSale = this.state.sale;

    this.templateService.getTemplates().subscribe((data) => {
      this.templates = data;
    });

    this.selectTemplateForm = new FormControl();

    this.myForm = this.fb.group({
        Name: '',
        productPrice: '',
        status: '',
        marge: '',
        sale: '',
        salePrice: '',
        sellingPoints: this.fb.array([])
      }
    );
    const sellingPoint = this.fb.group({
      nameSellingPoint: [''],
      valueSellingPoint: [''],
    });
    this.sellingPointForms.push(sellingPoint);

    if (this.state.sellingPoints !== undefined) {
      if (this.state.sellingPoints.length >= 0) {
        this.deleteSellingPoint(0);
        this.state.sellingPoints.forEach(point => {
            this.sellingPointForms.push(this.fb.group({
              nameSellingPoint: [point.nameSellingPoint],
              valueSellingPoint: [point.valueSellingPoint],
            }));
          }
        );
      }
    }
  }

  get sellingPointForms() {
    // @ts-ignore
    return this.myForm.get('sellingPoints') as FormArray;
  }

  addSellingPoint() {
    const sellingPoint = this.fb.group({
      nameSellingPoint: [],
      valueSellingPoint: [],
    });
    this.sellingPointForms.push(sellingPoint);
  }

  deleteSellingPoint(i) {
    this.sellingPointForms.removeAt(i);
  }

  save(data) {
    this.cardService.postPriceCard(data).subscribe((data) => {
      this.snackBar.open(data.message, '', {duration:3000});
    });
  }

  toPrint(data) {
    this.router.navigateByUrl('/print', {state: data});
  }

  toggleSalePrice(state) {
    this.showSale = state == true;
  }

  saveAsTemp(state) {
    const cop = JSON.parse(JSON.stringify(state));
    for (let i = 0; i < cop.sellingPoints.length; i++) {
      cop.sellingPoints[i].valueSellingPoint = '';
    }

    this.templateService.postTemplate(cop).subscribe((data) => {
      this.snackBar.open(data.message, '', {duration:3000});
    });
  }

  selectTemplate(select) {
    this.templateService.getTemplate(select.value).subscribe((data) => {

      if (this.state.sellingPoints !== undefined) {
        for (let i = 0; i <= this.state.sellingPoints.length; i++) {
          this.deleteSellingPoint(i);
        }
      }

      this.state = data;
      this.showSale = data.sale;

      if (this.state.sellingPoints !== undefined) {
        if (this.state.sellingPoints.length >= 0) {
          this.deleteSellingPoint(0);
          this.state.sellingPoints.forEach(point => {
              this.sellingPointForms.push(this.fb.group({
                nameSellingPoint: [point.nameSellingPoint],
                valueSellingPoint: [point.valueSellingPoint],
              }));
            }
          );
        }
      }
    });


  }


}
