import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../productitem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  imports: [CommonModule],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  
}
