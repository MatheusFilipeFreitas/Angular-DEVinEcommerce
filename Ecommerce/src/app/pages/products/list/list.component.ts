import { Component } from '@angular/core';
import { SearchPipePipe } from 'src/app/common/pipes/search-pipe.pipe';

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
      name: 'Socks',
      quantity: 50,
      unitPrice: 100
    },
    {
      id: 3,
      name: 'Gloves',
      quantity: 50,
      unitPrice: 100
    },
    {
      id: 4,
      name: 'Sunglasses',
      quantity: 50,
      unitPrice: 100
    },
  ];
  keySearch: string = '';

  constructor(private pipe: SearchPipePipe) {

  }
}
