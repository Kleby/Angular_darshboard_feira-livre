import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app-routing.module";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const importsTemplates = [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
]

@NgModule({
    declarations: importsTemplates,
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: importsTemplates
})
export class TemplateModule{}