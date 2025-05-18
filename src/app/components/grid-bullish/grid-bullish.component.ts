import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid-bullish',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grid-bullish.component.html',
  styleUrls: ['./grid-bullish.component.css']
})
export class BullishComponent implements OnInit {
  mostrarMensaje: boolean = false;
  searchCripto: string = '';

  //criptos
  criptos = [
    {
      title: 'Bitcoin (BTC)',
      symbol: 'btc',
      description: 'The first decentralized digital currency launched in 2009, using blockchain to ensure secure, transparent transactions with a capped supply of 21 million coins.',
      initialPrice: '$0.00099',
      maxPrice: '$109,000',
      img: '/assets/images/icon-bitcoin1.png',
      link: 'https://es.tradingview.com/chart/?symbol=BITSTAMP%3ABTCUSD'
    },
    {
      title: 'Ethereum (ETH)',
      symbol: 'eth',
      description: 'A blockchain platform introduced in 2015 that supports smart contracts and decentralized apps (DApps), with Ether (ETH) as its native cryptocurrency.',
      initialPrice: '$0.75',
      maxPrice: '$4,815.01',
      img: '/assets/images/icon-ethereum.png',
      link: 'https://es.tradingview.com/chart/?symbol=BITSTAMP%3AETHUSD'
    },
    {
      title: 'Solana (SOL)',
      symbol: 'sol',
      description: 'A high-performance blockchain platform designed for decentralized applications (DApps) and crypto projects. It aims to provide fast and low-cost transactions.',
      initialPrice: '$0.22',
      maxPrice: '$294.33',
      img: '/assets/images/icon-solana.png',
      link: 'https://es.tradingview.com/chart/?symbol=BINANCE%3ASOLUSD'
    },
    {
      title: 'Ripple (XRP)',
      symbol: 'xrp',
      description: 'A digital payment protocol and cryptocurrency designed for fast, low-cost international money transfers. It aims to facilitate cross-border transactions between financial institutions.',
      initialPrice: '$0.0058',
      maxPrice: '$3.84',
      img: '/assets/images/icon-xrp.png',
      link: 'https://es.tradingview.com/chart/?symbol=BINANCE%3AXRPUSD'
    },
    {
      title: 'Polkadot (DOT)',
      symbol: 'dot',
      description: 'A blockchain platform focused on enabling interoperability between different blockchains, enhancing scalability and innovation in decentralized systems.',
      initialPrice: '$0.29',
      maxPrice: '$53.13',
      img: '/assets/images/icon-dot.png',
      link: 'https://es.tradingview.com/chart/?symbol=GEMINI%3ADOTUSD'
    },
    {
      title: 'Litecoin (LTC)',
      symbol: 'ltc',
      description: 'A cryptocurrency created in 2011 as a faster, more lightweight alternative to Bitcoin, featuring quicker transaction times and lower fees.',
      initialPrice: '$4.31',
      maxPrice: '$388.80',
      img: '/assets/images/icon-ltc.png',
      link: 'https://es.tradingview.com/chart/?symbol=KRAKEN%3ALTCUSDH2025'
    }
  ];

  ngOnInit() {
    setTimeout(() => this.mostrarMensaje = true, 500);
  }

  get filteredCriptos() {
    const term = this.searchCripto.trim().toLowerCase();
    return this.criptos.filter(cripto =>
      cripto.title.toLowerCase().includes(term) || cripto.symbol.includes(term)
    );
  }

  onSubmit(event: Event) {
    event.preventDefault(); 
  }
}
