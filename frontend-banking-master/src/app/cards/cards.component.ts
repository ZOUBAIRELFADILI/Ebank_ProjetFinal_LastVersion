import {Component, inject} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-cards',
  standalone: true,
    imports: [
        NgIf,
        RouterLink
    ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  injector = inject(AuthService);
  router = inject(Router);

    handleLogout() {
        this.injector.logout();

    }
}
