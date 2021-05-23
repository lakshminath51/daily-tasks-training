import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structdirective',
  template: `<h2>{{title}}</h2>      
	<p *ngIf="showElement">Show Element</p>      
	<div [ngSwitch]="inpvalue">      
	<p style='color:blue'  *ngSwitchCase="1">You have selected M S Dhoni</p>      
	<p style='color:blue'  *ngSwitchCase="2">You have selected Sachin Tendulkar</p>      
	<p style='color:blue'  *ngSwitchCase="3">You have selected Satyaprakash Samantaray ng switch</p>     
	<p style='color:red'  *ngSwitchDefault>Sorry! Invalid selection....</p>      
	</div> <p appRed>This is a custom directive Hello This is Red</p>`,
})
export class StructdirectiveComponent implements OnInit {
  showElement=true;
  title: string="Structural directive ng switch";  
  inpvalue: number = 3;  
  constructor() { }

  ngOnInit(): void {
  }

}
