//Module
import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppRoutingModule} from './app-routing.module'
import {MatButtonModule,MatInputModule,MatCardModule,MatTabsModule} from '@angular/material'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {FieldsetModule} from 'primeng/fieldset'
import {MatTableModule} from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select'
//Component
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
import {RestaurantesComponent} from './restaurante/restaurantes.component'
import {RestauranteComboComponent} from './restaurante/restaurante-combo.component'
import {Restaurante_CadastroComponent} from './restaurante/restaurante_cadastro.component'
import {PratosComponent} from './prato/pratos.component'
import {Prato_CadastroComponent} from './prato/prato_cadastro.component'
//Service
import {ApiService} from './api.service'
import {ApiPratoService} from './api-prato.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteComboComponent,
    Restaurante_CadastroComponent,
    PratosComponent, 
    Prato_CadastroComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    FieldsetModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [ApiService, ApiPratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
