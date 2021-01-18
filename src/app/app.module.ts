import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './modulechat/page.module';
import { FooterComponent } from './pages/template/footer/footer.component';
import { HeaderComponent } from './pages/template/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CarouselComponent } from './pages/shared/carousel/carousel.component';
import { SoloComponent } from './pages/solo/solo.component';
import { ProductoComponent } from './pages/shared/producto/producto.component';
import { SubcategoriaComponent } from './pages/shared/subcategoria/subcategoria.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { PerfilUserComponent } from './pages/perfil-user/perfil-user.component';
import { ListaDeseoComponent } from './pages/lista-deseo/lista-deseo.component';
import { DetalleDeseoComponent } from './pages/shared/detalle-deseo/detalle-deseo.component';
import { CardCategoriasComponent } from './pages/shared/card-categorias/card-categorias.component';
import { MenuCategoriasComponent } from './pages/shared/menu-categorias/menu-categorias.component';
import { OtrochatComponent } from './pages/otrochat/otrochat.component';
import { CuerpoComponent } from './pages/cuerpo/cuerpo.component';
import { LateralComponent } from './pages/lateral/lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CategoriasComponent,
    CarouselComponent,
    SoloComponent,
    ProductoComponent,
    SubcategoriaComponent,
    DetalleProductoComponent,
    PerfilUserComponent,
    ListaDeseoComponent,
    DetalleDeseoComponent,
    CardCategoriasComponent,
    MenuCategoriasComponent,
    OtrochatComponent,
    CuerpoComponent,
    LateralComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
