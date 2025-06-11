import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  imports: [CommonModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartComponent implements AfterViewInit {
  //RESIVAR!!!
  cryptos = [
    { id: 'widget-btc', symbol: 'BINANCE:BTCUSDT', name: 'Bitcoin' },
    { id: 'widget-eth', symbol: 'BINANCE:ETHUSDT', name: 'Ethereum' },
    { id: 'widget-sol', symbol: 'BINANCE:SOLUSDT', name: 'Solana' },
    { id: 'widget-xrp', symbol: 'BINANCE:XRPUSDT', name: 'Ripple' },
    { id: 'widget-dot', symbol: 'BINANCE:DOTUSDT', name: 'Polkadot' },
    { id: 'widget-ltc', symbol: 'BINANCE:LTCUSDT', name: 'Litecoin' }
  ];

  ngAfterViewInit(): void {
    this.cryptos.forEach(crypto => {
      this.loadWidget(crypto.id, crypto.symbol);
    });
  }

  loadWidget(containerId: string, symbol: string): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: '100%',
      height: 220,
      locale: 'en',
      dateRange: '12M',
      colorTheme: 'dark',
      isTransparent: false,
      autosize: true,
    });

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }
  }
}
