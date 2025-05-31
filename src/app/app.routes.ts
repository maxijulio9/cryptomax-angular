import { Routes, RouterModule } from '@angular/router';
import { PortfolioReactComponent } from './components/portfolio-react/portfolio-react.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CriptoPricesComponent } from './components/cripto-prices/cripto-prices.component';


export const routes: Routes = [
    { path: '', component: HomepageComponent },
    {path: 'portfolio-react', component: PortfolioReactComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path: 'cripto-prices',component: CriptoPricesComponent}

];