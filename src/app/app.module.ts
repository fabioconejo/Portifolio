import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    SobreComponent,
    SkillsComponent,
    ExperienciaComponent,
    PortifolioComponent,
    ContatoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
