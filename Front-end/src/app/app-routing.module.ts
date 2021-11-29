import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
import { PagInicialComponent } from './shared/components/Home/pag-inicial.component';

import { ProductCreateComponent } from './modules/vendas/components/products/product-create/product-create/product-create.component';
import { ProductUpdateComponent } from './modules/vendas/components/products/product-create/product-update/product-update.component';
import { ProductScreenComponent } from './modules/vendas/components/products/product-create/product-screen/product-screen.component';


import { ClientCreateComponent } from './modules/vendas/components/clients/clients_PF/client-create/client-create.component';
import { ClientScreenComponent } from './modules/vendas/components/clients/clients_PF/client-screen/client-screen.component';
import { ClientsUpdateComponent } from './modules/vendas/components/clients/clients_PF/clients-update/clients-update.component';
// Components



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
