import { Component } from '@angular/core';
import { CompaniesCarrouselComponent } from "../companies-carrousel/companies-carrousel.component";
import { MainOperationsComponent } from "../../mainOperations/main-operations/main-operations.component";
import { PortfolioReactComponent } from "../../header-components/portfolio-react/portfolio-react.component";
import { PortfolioComponent } from "../../header-components/portfolio/portfolio.component";
import { BullishComponent } from "../grid-bullish/grid-bullish.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule, CompaniesCarrouselComponent, MainOperationsComponent,  BullishComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
