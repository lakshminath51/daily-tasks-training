import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attrselectors',
  template: `<button style='color:green' [ngStyle]="MyStyle()">Harsha</button>
  <app-structdirective></app-structdirective>`,
  styleUrls: ['./attrselectors.component.css']
})
export class AttrselectorsComponent implements OnInit {

   isBold: boolean = true;    
		fontSize: number = 30;    
		isItalic: boolean = true;    
    
    MyStyle() {    
        let mystyles = {    
            'font-weight': this.isBold ? 'bold' : 'normal',    
            'font-style': this.isItalic ? 'italic' : 'normal',    
            'font-size.px': this.fontSize    
        };    
    
        return mystyles;    
		}    
  constructor() { }

  ngOnInit(): void {
  }

}
