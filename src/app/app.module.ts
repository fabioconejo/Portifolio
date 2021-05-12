import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MenuComponent, InicioComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
