import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import {CardsComponent} from "../cards/cards.component";

@Component({
    selector: 'app-admin-template',
    standalone: true,
    templateUrl: './admin-template.component.html',
    styleUrl: './admin-template.component.css',
    imports: [NavbarComponent,CardsComponent,RouterOutlet]
})
export class AdminTemplateComponent {

}
