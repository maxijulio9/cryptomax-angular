import { Component } from '@angular/core';
import { CompaniesCarrouselComponent } from "../companies-carrousel/companies-carrousel.component";
import { MainOperationsComponent } from "../main-operations/main-operations.component";
import { PortfolioReactComponent } from "../portfolio-react/portfolio-react.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { BullishComponent } from "../grid-bullish/grid-bullish.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule, CompaniesCarrouselComponent, MainOperationsComponent, PortfolioReactComponent, PortfolioComponent, BullishComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
