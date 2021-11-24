import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './modules/vendas/components/clients/client-create/client-create.component';
import { ClientsUpdateComponent } from './modules/vendas/components/clients/clients-update/clients-update.component';
import { ProductCreateComponent } from './modules/vendas/components/products/product-create/product-create/product-create.component';
import { ProductUpdateComponent } from './modules/vendas/components/products/product-create/product-update/product-update.component';
import { ClientScreenComponent } from './modules/vendas/components/clients/client-screen/client-screen.component';
import { PagInicialComponent } from './shared/components/Home/pag-inicial.component';
import { ProductScreenComponent } from './modules/vendas/components/products/product-create/product-screen/product-screen.component';


const routes: Routes = [
  { path: "", component: PagInicialComponent},
  { path: "products", component: ProductScreenComponent},
  { path: "products/create", component: ProductCreateComponent},
  { path: "product/Update/:id", component: ProductUpdateComponent},
  { path: "clients", component: ClientScreenComponent},
  { path: "client/create", component: ClientCreateComponent},
  { path: "client/update/:id", component: ClientsUpdateComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
