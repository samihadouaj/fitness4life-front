import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentElComponent } from './aliment-el/aliment-el.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import {FormsModule} from '@angular/forms';
import {AlimentService} from './aliment.service';
import {AlimentRoutingModule} from './alimentRouting.module';

@NgModule({
  declarations: [AlimentElComponent, AlimentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlimentRoutingModule
  ],
  providers: [AlimentService]
})
export class AlimentsModuleModule { }
