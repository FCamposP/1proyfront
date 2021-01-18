import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './modulechat/chat/chat.component';
import { LoginComponent } from './modulechat/login/login.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaDeseoComponent } from './pages/lista-deseo/lista-deseo.component';
import { OtrochatComponent } from './pages/otrochat/otrochat.component';
import { DetalleDeseoComponent } from './pages/shared/detalle-deseo/detalle-deseo.component';
import { SoloComponent } from './pages/solo/solo.component';

const routes: Routes = [
{path:'auth',children:[
  {path:'login',component:LoginComponent},
  {path:'**', pathMatch:'full', redirectTo:'login'}
]
},
{path:'',children:[
  { path: '', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  {  path: 'chat', component:ChatComponent},
  {  path: 'solo', component:OtrochatComponent},
  {  path: 'listadeseo', component:ListaDeseoComponent},
  {  path: 'categorias', component:CategoriasComponent},
  {  path: 'detalleproducto', component:DetalleProductoComponent},
  {path:'**', pathMatch:'full', redirectTo:''}
]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
