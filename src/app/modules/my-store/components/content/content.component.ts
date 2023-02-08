import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  @Input() products!: {
    id: number,
    name: string,
    description: string,
  }[];

  @Output() productSelected = new EventEmitter<{ id: number, name: string, description: string }>();

  public share(product: { id: number, name: string, description: string }): void {
    this.productSelected.emit(product);
  }

}
