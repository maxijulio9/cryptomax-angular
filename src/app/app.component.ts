import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { BullishComponent } from "./components/grid-bullish/grid-bullish.component";
import { CompaniesCarrouselComponent } from './components/companies-carrousel/companies-carrousel.component';
import { MainOperationsComponent } from "./components/main-operations/main-operations.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,
            FooterComponent,
            BullishComponent,
            CompaniesCarrouselComponent,
            MainOperationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'crypto-max';
}
