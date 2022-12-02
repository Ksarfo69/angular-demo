import { OrderService } from '../../services/order.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
    orders;

    constructor(service:OrderService)
    {
      this.orders = service.getOrders();
    }
}
