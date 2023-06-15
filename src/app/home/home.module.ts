import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbdPopoverBasic } from "./popover-basic";

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgbdPopoverBasic
    ]
})
export class HomeModule { }

