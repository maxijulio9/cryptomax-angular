export interface Cripto {
  id: string;
  symbol: string;
  name: string;
  category: string;
  blockchain?: string;
  marketCapitalization: string;
  currentPrice?: number;
  useCase?: string;
}
