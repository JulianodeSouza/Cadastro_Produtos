import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './modules/vendas/components/clients/client-create/client-create.component';
import { ProductCreateComponent } from './modules/vendas/components/products/product-create/product-create/product-create.component';
import { ProductUpdateComponent } from './modules/vendas/components/products/product-create/product-update/product-update.component';
import { ClientScreenComponent } from './shared/components/client-screen/client-screen.component';
import { PagInicialComponent } from './shared/components/Home/pag-inicial.component';
import { ProductScreenComponent } from './shared/components/product-screen/product-screen.component';


const routes: Routes = [
  { path: "", component: PagInicialComponent},
  { path: "products", component: ProductScreenComponent},
  { path: "products/create", component: ProductCreateComponent},
  { path: "product/Update/:id", component: ProductUpdateComponent},
  { path: "clients", component: ClientScreenComponent},
  { path: "client/create", component: ClientCreateComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
