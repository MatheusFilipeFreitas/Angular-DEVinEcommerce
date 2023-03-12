import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  products: any[] = [
    {
    id: 1,
    name: 'Shoes',
    quantity: 50,
    unitPrice: 100
    },
    {
      id: 2,
      name: 'Shoes',
      quantity: 50,
      unitPrice: 100
    },
    {
      id: 3,
      name: 'Shoes',
      quantity: 50,
      unitPrice: 100
    },
    {
      id: 4,
      name: 'Shoes',
      quantity: 50,
      unitPrice: 100
    },

];
}
