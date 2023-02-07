import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-generate-component',
  templateUrl: './generate-component.component.html',
  styleUrls: ['./generate-component.component.scss']
})
export class GenerateComponentComponent implements OnInit {

  public name:String = "";
  public isDisable:boolean;

  abc : Record<string, boolean> = {};

  constructor() {
    this.isDisable = true;
  }

  ngOnInit(): void {
    this.name = "abc";
    console.log("abc");
  }

}
