import { Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";


const routeConfig: Routes = [
    {
        path: '',
        component: ProductsComponent,
        title: 'Home Page'
    }
    // {
    //     path: 'details/:id',
    //     component: DetailsComponent,
    //     title: 'Home details',
    // },
];

export default routeConfig;