import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentElComponent } from './aliment-el/aliment-el.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import {FormsModule} from '@angular/forms';
import {AlimentService} from './aliment.service';
import {AlimentRoutingModule} from './alimentRouting.module';
import {DayAssesmentService} from './dayAssesment.service';
import {ConsumedAlimentsComponent} from './consumed-aliments/consumed-aliments.component';
import {ConsalimentElComponent} from './consaliment-el/consaliment-el.component';
import {WrapComponent} from './wrap/wrap.component';
import {SidebarComponent} from '../layout/components/sidebar/sidebar.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  declarations: [AlimentElComponent, AlimentListComponent, ConsumedAlimentsComponent, WrapComponent, ConsalimentElComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlimentRoutingModule,
    LayoutModule,
  ],
  providers: [AlimentService]
})
export class AlimentsModuleModule { }
