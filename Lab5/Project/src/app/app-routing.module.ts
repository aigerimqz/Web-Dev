import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { ProductsComponent } from "./productlist/productlist.component";

const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'category/:category', component: ProductsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }