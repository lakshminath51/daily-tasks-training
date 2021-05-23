import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  colorValue='red';
  colorBlue='blue';
  colorBlack='black';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    alert("Clicked on the popup button");
  }
  mouseonP() {
    console.log("Mouse is moving on the paragraph");
  }
}
