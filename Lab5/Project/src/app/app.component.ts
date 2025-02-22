import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './productlist/productlist.component';
import { ProductItem } from './productitem';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ProductsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Project';

  categories = ['All', 'Toner', 'Serum', 'Cream', 'Cleansing Foam', 'Sunscreen', 'Cleansing Oil', 'Balm', 'Lip Care'];
  
  
  selectedCategory: string = 'All';
  
  


  
}
