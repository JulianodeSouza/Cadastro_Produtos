import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { PagInicialComponent } from './shared/components/Home/pag-inicial.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavComponent } from './shared/components/nav/nav.component';

import { ProductScreenComponent } from './modules/vendas/components/products/product-create/product-screen/product-screen.component';
import { ProductUpdateComponent } from './modules/vendas/components/products/product-create/product-update/product-update.component';
import { ProductCreateComponent } from './modules/vendas/components/products/product-create/product-create/product-create.component';

import { ClientCreateComponent } from './modules/vendas/components/clients/clients_PF/client-create/client-create.component';
import { ClientScreenComponent } from './modules/vendas/components/clients/clients_PF/client-screen/client-screen.component';
import { ClientsUpdateComponent } from './modules/vendas/components/clients/clients_PF/clients-update/clients-update.component';
import { CPFPipe } from './modules/vendas/components/clients/clients_PF/client-screen/cpf.pipe';
// Components

// Dependências
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AlertComponent } from './shared/components/alert/alert.component';



const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    PagInicialComponent,
    ProductScreenComponent,
    ProductCreateComponent,
    ClientScreenComponent,
    ClientCreateComponent,
    ProductUpdateComponent,
    CPFPipe,
    ClientsUpdateComponent,
    AlertComponent,
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    BrowserAnimationsModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
