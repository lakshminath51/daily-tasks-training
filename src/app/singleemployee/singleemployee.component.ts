import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleemployee',
  templateUrl: './singleemployee.component.html',
  styleUrls: ['./singleemployee.component.css']
})
export class SingleemployeeComponent implements OnInit {

  constructor() { }
  emp={name:"harsha", company:"cts", address:"Mtm"}
  ngOnInit(): void {
  }

}
