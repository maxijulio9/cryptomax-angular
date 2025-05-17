import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { BullishComponent } from "./components/grid-bullish/grid-bullish.component";
import { CompaniesCarrouselComponent } from './components/companies-carrousel/companies-carrousel.component';
import { MainOperationsComponent } from "./components/main-operations/main-operations.component";
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import { PortfolioReactComponent } from "./components/portfolio-react/portfolio-react.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,
    FooterComponent,
    BullishComponent,
    CompaniesCarrouselComponent,
    MainOperationsComponent, PortfolioComponent, PortfolioReactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'crypto-max';
}
