import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { authenticationGuard } from './guards/authentication.guard';
import { authorizationGuard } from './guards/authorization.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {NewAccountComponent} from "./new-account/new-account.component";
import {BankAccountComponent} from "./bank-account/bank-account.component";
import {CardsComponent} from "./cards/cards.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "admin", component: AdminTemplateComponent, canActivate: [authenticationGuard], children: [
      { path: "customers", component: CustomersComponent },
      { path: "accounts", component: AccountsComponent },
      { path: "new-customer", component: NewCustomerComponent, canActivate: [authorizationGuard], data: { roles: "ADMIN" } },
      { path: "customer-accounts/:id", component: CustomerAccountsComponent, },
      { path: "edit-customer/:id", component: EditCustomerComponent, canActivate: [authorizationGuard], data: { roles: "ADMIN" } },
      { path: "notAuthorized", component: NotAuthorizedComponent },
      { path: "new-account", component: NewAccountComponent },
      { path: "bank-accounts", component:BankAccountComponent },

      ]
  },

];
