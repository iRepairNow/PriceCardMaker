import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

(window as any).html2canvas = html2canvas;


@Component({
  selector: 'app-printpage',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.scss']
})
export class PrintPageComponent implements OnInit {

  @ViewChild('content', {static: true}) content: ElementRef;

  state = Object;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.state = history.state;

    // @ts-ignore
    if (this.state.Name == '' || this.state.productPrice == '') {
      this.router.navigateByUrl('editor');
    }
  }

  backToEditor() {
    this.router.navigateByUrl('/editor', {state: this.state});
  }

  makePdf() {
    html2canvas(document.getElementById('printContent'), {
      allowTaint: true,
      windowHeight: window.outerHeight + window.innerHeight
    }).then((canvas) => {
      let doc = new jsPDF();
      let img = canvas.toDataURL('image/PNG');

      const bufferX = 5;
      const bufferY = 5;
      const imgProps = (<any>doc).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      // @ts-ignore
      doc.save(`${this.state.Name}.pdf`);
    });

  }

  printer() {
    window.print();
  }

}
