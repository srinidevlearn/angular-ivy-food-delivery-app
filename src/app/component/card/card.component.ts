import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Menu, ProductAction } from "../../interfaces";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() foodData;
  @Output() selectionEmit = new EventEmitter();
  defaultData: number = 0;

  constructor() {}

  ngOnInit() {}

  increment(id: number) {
    this.defaultData++;
    this.defaultData = this.defaultData <= 5 ? this.defaultData : 5;
    this.selectionEmit.emit({
      ID: id,
      COUNT: this.defaultData
    });
  }
  decrement(id: number) {
    this.defaultData--;
    this.defaultData = this.defaultData < 0 ? 0 : this.defaultData;

    this.selectionEmit.emit({
      ID: id,
      COUNT: this.defaultData
    });
  }

  emitData(data: ProductAction) {
    return this.selectionEmit.emit(data);
  }
}
