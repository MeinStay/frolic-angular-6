import { NgModule } from "@angular/core";
import { CommonModule, FormStyle } from "@angular/common";
import { UiRoutingModule } from "./ui-routing.module";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from "./cart/cart.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, UiRoutingModule, FormsModule],
  declarations: [RegisterComponent, LoginComponent, CartComponent],
})
export class UiModule {}
