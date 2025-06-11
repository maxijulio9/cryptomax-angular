import { Routes, RouterModule } from '@angular/router';
import { PortfolioReactComponent } from './components/header-components/portfolio-react/portfolio-react.component';
import { PortfolioComponent } from './components/header-components/portfolio/portfolio.component';
import { HomepageComponent } from './components/home/homepage/homepage.component';
import { CriptoPricesComponent } from './components/mainOperations/cripto-prices/cripto-prices.component';
import { HelpComponent } from './components/header-components/help/help.component';
import { ChartComponent } from './components/mainOperations/charts/charts.component';


export const routes: Routes = [
    { path: '', component: HomepageComponent },
    {path: 'portfolio-react', component: PortfolioReactComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path: 'cripto-prices',component: CriptoPricesComponent},
    {path: 'help', component: HelpComponent},
    {path: 'charts', component: ChartComponent}

];